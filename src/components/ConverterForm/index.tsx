import React, { FC, Key, useEffect, useState } from "react";
import { ExchangeFormData } from "../../interfaces/dbData";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useLocation, useNavigate } from "react-router-dom";
import useListOfCurrency from "../../hooks/useListOfCurrency";
import { currencyResultHandler } from "../../helpers/addCurrencyAsPlaceholder";
import useExchangeCurrency from "../../hooks/useExchangeCurrency";
import {
  Arrow,
  ErrorMessage,
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
  HistoryButton, SelectFormField
} from "./styles";
import Modal from "../Modal";
import { validateForm } from "../../helpers/validateForm";

interface Props {
  addFormData: (submittedCurrencyData: ExchangeFormData | null, dataFromRequest: number | null, date: string) => void
}

const ConverterForm: FC<Props> = ({ addFormData }) => {
  const [showModal, setShowModal] = useState(false);
  const [formError, setFormError] = useState<boolean | undefined>(false);
  const today = new Date().toISOString().split("T")[0];
  const [chosenCurrencyAmountValue, setChosenCurrencyAmountValue] = useState('AED');
  const [chosenCurrencyResultValue, setChosenCurrencyResultValue] = useState('AED');
  const [currencyResult, setCurrencyResult] = useState(0);
  const [date] = useState<string>(today);
  const [submittedData, setSubmittedData] = useState<ExchangeFormData | null>(null);
  const [dataFromRequest, setDataFromRequest] = useState<number | null>(null);
  const [locationText, setLocationText] = useState("Pokaż Historię");
  const currencyResultValue = currencyResultHandler(currencyResult, chosenCurrencyResultValue);
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ExchangeFormData>({
    mode: 'onChange'
  });
  const { isLoading, refetch } = useExchangeCurrency(submittedData)

//   const {
//   currencyList,
//   isDataLoading,
//   currencyOnLoad
// } = useListOfCurrency();
//
//   useEffect(() => {
//     if (!currencyList && !isDataLoading) {
//       currencyOnLoad()
//     }
//   },[currencyList, isDataLoading, currencyOnLoad])

  useEffect(() => {
    if (submittedData) {
      refetch().then((data) => setDataFromRequest(data.data.data.conversion_result.toFixed(2)))
    }
    if (location.pathname === '/ConverterWithHistory') {
      setLocationText('Ukryj Historię')
    }
  }, [submittedData, refetch, location.pathname])

  useEffect(() => {
    if (dataFromRequest) {
      addFormData(submittedData, dataFromRequest, date)
      setSubmittedData(null)
      setCurrencyResult(dataFromRequest);
      setDataFromRequest(null)
    }
  }, [dataFromRequest, date, addFormData, submittedData])

  const onSubmit = (formValues: ExchangeFormData) => {
    const validate = validateForm(chosenCurrencyAmountValue, chosenCurrencyResultValue);
    setFormError(validate);
    if (validate) {
      setShowModal(true);
      return
    }
    const formData = {
      ...formValues
    };
    setSubmittedData(formData);
    reset();
  };

  const locationHandler = () => {
    if (location.pathname === '/ConverterWithHistory') {
      setLocationText('Pokaż Historię')
      navigate('/')
    } else {
      setLocationText('Ukryj Historię')
      navigate('/ConverterWithHistory')
    }
  }

  const onSubmitError: SubmitHandler<any> = (data) => {
    if (errors) {
      setShowModal(true);
      setFormError(true);
    } else {
      setFormError(false);
    }

  };

// const handleOptions = () => {
//   if (!isDataLoading && currencyList) {
//     const allData = currencyList?.data.supported_codes;
//     const code = allData.map((e: string) => e[0])
//     return code.map((item: string, index: Key) => {
//       return (
//         <option key={index} value={item}>{item}</option>
//       )
//     })
//   }
// }

  return (
    <>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        {formError && <ErrorMessage>Pole "kwota" nie może być puste i/lub waluty nie mogą być takie same.</ErrorMessage>}
      </Modal>
      <FormWrapper>
        <Form onSubmit={handleSubmit(onSubmit, onSubmitError)}>
          <FieldWrapper>
            <SelectWrapper>
              <SelectFormField>
                <Label>
                  Przelicz z
                </Label>
                <Select
                  {...register('exchangeFrom', { required: true })}
                  onChange={(e) => setChosenCurrencyAmountValue(e.target.value)}
                >
                  <option value='EUR'>EUR</option>
                  <option value='EUR'>EUR</option>
                  <option value='EUR'>EUR</option>
                  <option value='EUR'>EUR</option>
                  <option value='EUR'>EUR</option>
                  {/*{handleOptions()}*/}
                </Select>
              </SelectFormField>
              <FormArrowField>
                <Arrow/>
              </FormArrowField>

              <SelectFormField>
                <Label>
                  Przelicz na
                </Label>
                <Select
                  {...register('exchangeTo', { required: true })}
                  onChange={(e) => setChosenCurrencyResultValue(e.target.value)}
                >
                  <option value='PLN'>PLN</option>
                  <option value='PLN'>PLN</option>
                  <option value='PLN'>PLN</option>
                  <option value='PLN'>PLN</option>
                  <option value='PLN'>PLN</option>
                  {/*{handleOptions()}*/}
                </Select>
              </SelectFormField>
            </SelectWrapper>
            <CustomFieldWrapper>
              <FormField>
                <Label>
                  Kwota
                </Label>
                <CustomContainer>
                  <Input
                    {...register("amount", { required: true })}
                    id='amount'
                    name='amount'
                    type='number'
                    placeholder="   Wpisz kwotę"
                  />
                  <PlaceholderForInput>
                    {chosenCurrencyAmountValue}
                  </PlaceholderForInput>
                </CustomContainer>
              </FormField>
              <ResultWrapper>
                {isLoading && <span>Checking..</span>}
                {!isLoading && <span className="text-field">Wynik</span>}
                {!isLoading && currencyResultValue}
              </ResultWrapper>
            </CustomFieldWrapper>
          </FieldWrapper>
          <ButtonsWrapper>
            <HistoryButton onClick={() => {
              locationHandler()
            }}>
              <p>{locationText}</p>
            </HistoryButton>
            <ConvertButton type="submit">
              Konwertuj
            </ConvertButton>
          </ButtonsWrapper>
        </Form>
      </FormWrapper>
    </>
  )
}

export default ConverterForm;
