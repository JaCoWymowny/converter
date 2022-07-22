import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import { useState } from "react";

const useListOfCurrency = () => {
  const [hasError, setHasError] = useState(false)

  const {isLoading, data, isError, error} = useQuery<any , AxiosError>(`all-currency`, () => {
    return axios.get('https://v6.exchangerate-api.com/v6/24c28d3a1ae161c26190a228/codes')
  }, {
    staleTime: 120000,
    enabled: !hasError, onError: (error) => setHasError(true)
  })
  const isDataLoading = isLoading;
  const currencyList = data?.data.supported_codes;
  const isQueryError = isError;
  const queryError = error;

  return {isDataLoading, currencyList, isQueryError, queryError, setHasError}
}

export default useListOfCurrency;
