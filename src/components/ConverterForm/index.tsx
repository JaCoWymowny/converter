import React, { FC, Key, useEffect, useState } from "react";
import { ExchangeFormData } from "../../interfaces/dbData";
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from "react-router-dom";
import useListOfCurrency from "../../hooks/useListOfCurrency";
import { currencyResultHandler } from "../../helpers/addCurrencyAsPlaceholder";
import useExchangeCurrency from "../../hooks/useExchangeCurrency";
import {
  Arrow,
  FormWrapper,
  Form,
  FieldWrapper,
  FormField,
  FormArrowField,
  Select,
  Label,
  TestContainer,
  Input,
  ResultWrapper,
  CurrencyResult,
  ButtonsWrapper,
  PlaceholderForInput,
  ConvertButton,
  HistoryButton
} from "./styles";

interface Props {
  addFormData: (submittedCurrencyData: ExchangeFormData | null, dataFromRequest: number | null, date: string) => void
}

const ConverterForm:FC<Props> = ({ addFormData }) => {
  const today = new Date().toISOString().split("T")[0];
  const [chosenCurrencyResultValue, setChosenCurrencyResultValue] = useState('AED');
  const [chosenCurrencyAmountValue, setChosenCurrencyAmountValue] = useState('AED');
  const [currencyResult, setCurrencyResult] = useState(0);
  const [date] = useState<string>(today);
  const [submittedData, setSubmittedData] = useState<ExchangeFormData | null>(null);
  const [dataFromRequest, setDataFromRequest] = useState<number | null>(null);
  const [locationText, setLocationText] = useState("Pokaż Historię");
  const currencyResultValue = currencyResultHandler(currencyResult, chosenCurrencyResultValue);
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<ExchangeFormData>({
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
      refetch().then((data) => setDataFromRequest(data.data.data.conversion_result))
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
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldWrapper>
          <FormField>
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
          </FormField>
          <FormArrowField>
            <Arrow />
          </FormArrowField>

          <FormField>
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
          </FormField>
          <FormField>
            <Label>
              Kwota
            </Label>
            <TestContainer>
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
            </TestContainer>
          </FormField>
          <ResultWrapper>
            {isLoading && <span>Checking..</span>}
            {!isLoading && <span>Wynik</span>}
            {!isLoading && currencyResultValue}
          </ResultWrapper>
        </FieldWrapper>
        <ButtonsWrapper>
            <HistoryButton onClick={() => { locationHandler()}}>
                <p>{locationText}</p>
            </HistoryButton>
          <ConvertButton type="submit">
              Konwertuj
          </ConvertButton>
        </ButtonsWrapper>
      </Form>
    </FormWrapper>
  )
}

export default ConverterForm;
