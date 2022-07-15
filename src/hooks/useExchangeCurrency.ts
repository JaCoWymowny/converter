import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { ExchangeFormData } from "../interfaces/dbData";

const fetchDataToExchange = (submittedData: ExchangeFormData | null) => {
  return axios.get<any, any>(`https://v6.exchangerate-api.com/v6/bdd4f96c0272c717fcd7a9e2/pair/${submittedData?.exchangeFrom}/${submittedData?.exchangeTo}/${submittedData?.amount}`)
}

export const useExchangeCurrency = (submittedData: ExchangeFormData | null) => {
  return useQuery<any , AxiosError>(['exchange', ], () => fetchDataToExchange(submittedData), {
    enabled: false
  })
}

export default useExchangeCurrency;


