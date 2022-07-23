import React, { FC, Key, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

import { ExchangeFormData } from "../../interfaces/dbData";

import { currencyResultHandler } from "../../helpers/addCurrencyAsPlaceholder";
import useExchangeCurrency from "../../hooks/useExchangeCurrency";
import Modal from "../Modal";

import {
  Arrow,
  FormWrapper,
  Form,
  FieldWrapper,
  FormField,
  FormArrowField,
  SelectWrapper,
  CustomFieldWrapper,
  Select,
  Label,
  CustomContainer,
  Input,
  ResultWrapper,
  ButtonsWrapper,
  PlaceholderForInput,
  ConvertButton,
  HistoryButton,
  SelectFormField,
  ErrorField, ErrorMessage
} from "./styles";

interface Props {
  addFormData: (submittedCurrencyData: ExchangeFormData | null, dataFromRequest: number | null, date: string) => void
  currencyList: string[]
}

const ConverterForm: FC<Props> = ({ addFormData, currencyList }) => {
  const today = new Date().toISOString().split("T")[0];
  const [date] = useState<string>(today);
  const [showModal, setShowModal] = useState(false);

  const [chosenCurrencyAmountValue, setChosenCurrencyAmountValue] = useState('');
  const [chosenCurrencyResultValue, setChosenCurrencyResultValue] = useState('');
  const [currencyResult, setCurrencyResult] = useState(0);
  const [submittedData, setSubmittedData] = useState<ExchangeFormData | null>(null);
  const currencyResultValue = currencyResultHandler(currencyResult, chosenCurrencyResultValue);

  const location = useLocation();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<ExchangeFormData>({
    mode: 'onChange'
  });
  const { isLoading, dataFromRequest, setDataFromRequest, isError, error } = useExchangeCurrency(submittedData)

  useEffect(() => {
    if (isError) {
      setShowModal(true)
    }
  }, [isError, error])

  useEffect(() => {
    if (dataFromRequest) {
      addFormData(submittedData, dataFromRequest, date)
      setCurrencyResult(dataFromRequest);
      setSubmittedData(null)
      setDataFromRequest(null)
    }
  }, [dataFromRequest, date, addFormData, submittedData, setDataFromRequest])

  const onSubmit = (formValues: ExchangeFormData) => {
    const formData = {
      ...formValues
    };
    setSubmittedData(formData);
  };

  const handleOptions = () => {
    const code = currencyList.map((e: string) => e[0])
    return code.map((item: string, index: Key) => {
      return (
        <option key={index} value={item}>{item}</option>
      )
    })
  }

  return (
    <>
      <Modal show={showModal} onClose={() => {
        setShowModal(false)
      }}>
        <ErrorMessage>{error?.message}</ErrorMessage>
      </Modal>
      <FormWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}
        >
          <FieldWrapper>
            <SelectWrapper>
              <SelectFormField>
                <Label>
                  Przelicz z
                </Label>
                <Select {...register('exchangeFrom', { required: true })}
                        onChange={(e) => setChosenCurrencyAmountValue(e.target.value)}>
                  <option value=""></option>
                  {handleOptions()}
                </Select>
                <ErrorField errors={errors}>{errors.exchangeFrom?.type === "required" && "Wybierz walutę"}</ErrorField>
              </SelectFormField>
              <FormArrowField>
                <Arrow/>
              </FormArrowField>

              <SelectFormField>
                <Label>
                  Przelicz na
                </Label>
                <Select {...register('exchangeTo', { required: true })}
                        onChange={(e) => setChosenCurrencyResultValue(e.target.value)}>
                  <option value=''></option>
                  {handleOptions()}
                </Select>
                <ErrorField errors={errors}>{errors.exchangeTo?.type === "required" && "Wybierz walutę"}</ErrorField>
              </SelectFormField>
            </SelectWrapper>
            <CustomFieldWrapper>
              <FormField>
                <Label>
                  Kwota
                </Label>
                <CustomContainer>
                  <Input errors={errors}
                         {...register("amount", { required: true })}
                         id='amount'
                         name='amount'
                         type='number'
                         placeholder="   Wpisz kwotę"
                  />
                  <PlaceholderForInput errors={errors}>
                    {chosenCurrencyAmountValue}
                  </PlaceholderForInput>
                  <ErrorField
                    errors={errors}>{errors.amount?.type === "required" && "Brak wartości do konwersji"}</ErrorField>
                </CustomContainer>
              </FormField>
              <ResultWrapper>
                <span className="text-field">Wynik</span>
                {currencyResultValue}
              </ResultWrapper>
            </CustomFieldWrapper>
          </FieldWrapper>
          <ButtonsWrapper>
            {
              location.pathname === "/" ?
                <HistoryButton onClick={() => navigate('/ConverterWithHistory')}>
                  Pokaż Historię
                </HistoryButton>
                :
                <HistoryButton onClick={() => navigate('/')}>
                  Ukryj Historię
                </HistoryButton>
            }
            <ConvertButton type="submit">
              {isLoading ? "x" : "Konwertuj"}
            </ConvertButton>
          </ButtonsWrapper>
        </Form>
      </FormWrapper>
    </>
  )
}

export default ConverterForm;
