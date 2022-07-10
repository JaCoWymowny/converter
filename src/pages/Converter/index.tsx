import ConverterForm from "../../components/ConverterForm";
import { ExchangeFormData } from "../../interfaces/dbData";
import useListOfCurrency from "../../hooks/useListOfCurrency";

const ConverterPage = () => {
  const {
    data,
    isLoading
  } = useListOfCurrency();

  const addFormData = (submittedCurrencyData: ExchangeFormData) => {
    console.log(submittedCurrencyData)
  }
  return (
    <div>
      {isLoading && <div>Loading</div>}
      {!isLoading && <ConverterForm addFormData={addFormData} codeList={data}/>}
    </div>
  )
}

export default ConverterPage;
