import axios from "axios";
import { useQuery } from "react-query";
import { ExchangeFormData } from "../interfaces/dbData";

const fetchDataToExchange = (submittedData: ExchangeFormData | null) => {
  return axios.get<any, any>(`https://v6.exchangerate-api.com/v6/24c28d3a1ae161c26190a228/pair/${submittedData?.exchangeFrom}/${submittedData?.exchangeTo}/${submittedData?.amount}`)
}

export const useExchangeCurrency = (submittedData: ExchangeFormData | null) => {
  return useQuery(['exchange', ], () => fetchDataToExchange(submittedData), {
    enabled: false
  })
}

export default useExchangeCurrency;


