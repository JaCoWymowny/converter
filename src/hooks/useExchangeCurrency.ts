import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { ExchangeFormData } from "../interfaces/dbData";
import { useEffect, useState } from "react";

export const useExchangeCurrency = (submittedData: ExchangeFormData | null) => {
  const [dataFromRequest, setDataFromRequest] = useState<number | null>(null);

  const { isLoading, refetch, isError, error } = useQuery<any, AxiosError>('exchange', () => {
    return axios.get(`https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY}/pair/${submittedData?.exchangeFrom}/${submittedData?.exchangeTo}/${submittedData?.amount}`)
  }, {
    enabled: false
  })

  useEffect(() => {
    if (submittedData) {
      refetch().then((data) => setDataFromRequest(data.data.data.conversion_result.toFixed(2)))
    }
  }, [submittedData, refetch])

  return { isLoading, refetch, dataFromRequest, setDataFromRequest, isError, error }
}

export default useExchangeCurrency;


