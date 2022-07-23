import React, { FC, Key, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

import { ExchangeFormData } from "../../interfaces/dbData";

import useExchangeCurrency from "../../hooks/useExchangeCurrency";
import Modal from "../Modal";

import {
  Arrow,
  FormWrapper,
  Form,
  FormFieldWrapper,
  FormField,
  ExchangeArrowWrapper,
  SelectsWrapper,
  AmountAndResultWrapper,
  Select,
  Label,
  InputAndResultField,
  Input,
  ButtonsWrapper,
  ConvertSubmitButton,
  HistoryButton,
  SelectFormField,
  ErrorField,
  ErrorMessage
} from "./styles";

interface Props {
  addFormDataToHistory: (submittedCurrencyData: ExchangeFormData | null, dataFromRequest: number | null, date: string) => void
  currencyList: string[]
}

const ConverterForm: FC<Props> = ({ addFormDataToHistory, currencyList }) => {
  const today = new Date().toISOString().split("T")[0];
  const [date] = useState<string>(today);
  const [showModal, setShowModal] = useState(false);

  const [shortCurrencyNamesAmountField, setShortCurrencyNamesAmountField] = useState('');
  const [shortCurrencyNamesResultField, setShortCurrencyNamesResultField] = useState('');
  const [currencyExchangeResult, setCurrencyExchangeResult] = useState(0);
  const [submittedFormData, setSubmittedFormData] = useState<ExchangeFormData | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<ExchangeFormData>({
    mode: 'onChange'
  });
  const { isLoading, dataFromRequest, setDataFromRequest, isError, error } = useExchangeCurrency(submittedFormData)

  useEffect(() => {
    if (isError) {
      setShowModal(true)
    }
  }, [isError, error])

  useEffect(() => {
    if (dataFromRequest) {
      addFormDataToHistory(submittedFormData, dataFromRequest, date)
      setCurrencyExchangeResult(dataFromRequest);
      setSubmittedFormData(null)
      setDataFromRequest(null)
    }
  }, [dataFromRequest, date, addFormDataToHistory, submittedFormData, setDataFromRequest])

  const onSubmit = (formValues: ExchangeFormData) => {
    const formData = {
      ...formValues
    };
    setSubmittedFormData(formData);
  };

  const handleOptions = () => {
    const shortCurrencyCode = currencyList.map((element: string) => element[0])
    return shortCurrencyCode.map((item: string, index: Key) => {
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
        <Form onSubmit={handleSubmit(onSubmit)}>

          <FormFieldWrapper>
            <SelectsWrapper>
              <SelectFormField>
                <div className="select-container">
                  <Label>
                    Przelicz z
                  </Label>
                  <Select {...register('exchangeFrom', { required: true })}
                          onChange={(e) => setShortCurrencyNamesAmountField(e.target.value)}>
                    <option value=""></option>
                    {handleOptions()}
                  </Select>
                </div>
                <ErrorField errors={errors}>{errors.exchangeFrom?.type === "required" && "Wybierz walutę"}</ErrorField>
              </SelectFormField>

              <ExchangeArrowWrapper>
                <Arrow/>
              </ExchangeArrowWrapper>

              <SelectFormField>
                <div className="select-container">
                <Label>
                  Przelicz na
                </Label>
                <Select {...register('exchangeTo', { required: true })}
                        onChange={(e) => setShortCurrencyNamesResultField(e.target.value)}>
                  <option value=''></option>
                  {handleOptions()}
                </Select>
                </div>
                <ErrorField errors={errors}>{errors.exchangeTo?.type === "required" && "Wybierz walutę"}</ErrorField>
              </SelectFormField>
            </SelectsWrapper>

            <AmountAndResultWrapper>
              <FormField>
                <div className="amount-container">
                <Label>
                  Kwota
                </Label>
                <InputAndResultField errors={errors}>
                  <label>
                    <span>{shortCurrencyNamesAmountField}</span>
                    <Input errors={errors}
                           {...register("amount", { required: true })}
                           id='amount'
                           name='amount'
                           type='number'
                           placeholder="Wpisz kwotę "
                    />
                  </label>
                </InputAndResultField>
                </div>
                <ErrorField className="specific-width" errors={errors}>{errors.amount?.type === "required" && "Brak wartości do konwersji"}</ErrorField>
              </FormField>

              <FormField className="result-container">
                <Label>
                  Wynik
                </Label>
                <InputAndResultField errors={errors}>
                  <div className='result'>
                    <span className="result-currency">{shortCurrencyNamesResultField}</span>
                    <span className="result-amount">{currencyExchangeResult}</span>
                  </div>
                </InputAndResultField>
              </FormField>
            </AmountAndResultWrapper>
          </FormFieldWrapper>

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
            <ConvertSubmitButton type="submit"
                                 disabled={isLoading}
            >
              Konwertuj
            </ConvertSubmitButton>
          </ButtonsWrapper>
        </Form>
      </FormWrapper>
    </>
  )
}

export default ConverterForm;
