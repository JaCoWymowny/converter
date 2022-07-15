import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";

const useListOfCurrency = () => {
  const {isLoading, data, refetch, isError, error} = useQuery<any , AxiosError>(`all-currency`, () => {
    return axios.get('https://v6.exchangerate-api.com/v6/24c28d3a1ae161c26190a228/codes')
  }, {
    enabled: false
  })
  const currencyOnLoad = refetch;
  const isDataLoading = isLoading;
  const currencyList = data;
  const isQueryError = isError;
  const queryError = error;
  return {isDataLoading, currencyList, currencyOnLoad, isQueryError, queryError}
}

export default useListOfCurrency;
