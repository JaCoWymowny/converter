import axios from "axios";
import { useQuery } from "react-query";

const useListOfCurrency = () => {
  const {isLoading, data, refetch} = useQuery(`all-currency`, () => {
    return axios.get('https://v6.exchangerate-api.com/v6/bdd4f96c0272c717fcd7a9e2/codes')
  }, {
    enabled: false
  })
  const currencyOnLoad = refetch;
  const isDataLoading = isLoading;
  const currencyList = data;
  return {isDataLoading, currencyList, currencyOnLoad}
}

export default useListOfCurrency;
