import React, { FC, Key, useEffect, useState } from "react";
import { ExchangeFormData } from "../../interfaces/dbData";
import { useForm } from 'react-hook-form';
import useListOfCurrency from "../../hooks/useListOfCurrency";
import useExchangeCurrency from "../../hooks/useExchangeCurrency";

interface Props {
  addFormData: (submittedCurrencyData: ExchangeFormData | null, dataFromRequest: number | null, date: string) => void
}

const ConverterForm:FC<Props> = ({ addFormData }) => {
  const today = new Date().toISOString().split("T")[0];
  const [date] = useState<string>(today);
  const [submittedData, setSubmittedData] = useState<ExchangeFormData | null>(null);
  const [dataFromRequest, setDataFromRequest] = useState<number | null>(null);
  const [currencyResult, setCurrencyResult] = useState(0);
  const { register, handleSubmit, reset } = useForm<ExchangeFormData>({
    mode: 'onChange'
  });
  const { isLoading, refetch } = useExchangeCurrency(submittedData)
    const {
  currencyList,
  isDataLoading,
  currencyOnLoad
} = useListOfCurrency();

  useEffect(() => {
    if (!currencyList && !isDataLoading) {
      currencyOnLoad()
    }
  },[currencyList, isDataLoading, currencyOnLoad])

  useEffect(() => {
    if (submittedData) {
      console.log("useEffect ruszył ")
      console.log("test po ruszeniu:  ", submittedData);
      refetch().then((data) => setDataFromRequest(data.data.data.conversion_result))
    }
  }, [submittedData, refetch])

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

const handleOptions = () => {
  if (!isDataLoading && currencyList) {
    const allData = currencyList?.data.supported_codes;
    const code = allData.map((e: string) => e[0])
    return code.map((item: string, index: Key) => {
      return (
        <option key={index} value={item}>{item}</option>
      )
    })
  }
}

  return (
    <>
      <form style={{ display: "inline-grid", gridTemplateColumns: "auto auto", gridGap: "10px 50px" }}
            onSubmit={handleSubmit(onSubmit)}
      >
        <label>
          Przelicz z
        </label>
        <select {...register('exchangeFrom', {required: true})} >
          <option value=''>select a currency</option>
          {handleOptions()}
        </select>
        <label>
          Przelicz na
        </label>
        <select {...register('exchangeTo', {required: true})}>
          <option value=''>select a currency</option>
          {handleOptions()}
        </select>
        <label>
          Kwota
        </label>
        <input
          {...register("amount", {required: true})}
          id='amount'
          name='amount'
          type='number'
        />
        <div>
          {isLoading && <span>Checking..</span>}
          {!isLoading && <span>{currencyResult}</span>}
        </div>
        <button>
          Konwertuj
        </button>
      </form>
    </>
  )
}

export default ConverterForm;
