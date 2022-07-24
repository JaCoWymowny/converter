import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { useState } from "react";

const useListOfCurrency = () => {
  const [hasError, setHasError] = useState(false)

  const { isLoading, data, isError, error, isFetching } = useQuery<any, AxiosError>(`all-currency`, () => {
    return axios.get(`https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY}/codes`)
  }, {
    staleTime: 120000,
    enabled: !hasError, onError: (error) => setHasError(true)
  })
  const isDataLoading = isLoading;
  const currencyList = data?.data.supported_codes;
  const isQueryError = isError;
  const queryError = error;

  return { isDataLoading, currencyList, isQueryError, queryError, isFetching, setHasError }
}

export default useListOfCurrency;
