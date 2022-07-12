import ConverterForm from "../../components/ConverterForm";
import { ExchangeFormData } from "../../interfaces/dbData";

const ConverterPage = () => {
  const addFormData = (submittedCurrencyData: ExchangeFormData | null, conversionResult: number | null, date: string) => {
    const obj = {
      exchangeFrom: submittedCurrencyData?.exchangeFrom,
      exchangeTo: submittedCurrencyData?.exchangeTo,
      amount: submittedCurrencyData?.amount,
      conversionResult: conversionResult,
      date: date
    }
    console.log(obj)
  }

  return (
    <div>
      <ConverterForm addFormData={addFormData} />
    </div>
  )
}

export default ConverterPage;
