import ConverterForm from "../../components/ConverterForm";
import { ExchangeFormData, HistoryRecords } from "../../interfaces/dbData";
import { FC } from "react";
import { ContainerWrapper, Title } from "./styles";


interface Props {
  historyDataHandler: (newHistoryItem: HistoryRecords) => void
}

const ConverterPage:FC<Props> = ({historyDataHandler}) => {
  const addFormData = (
    submittedCurrencyData: ExchangeFormData | null,
    conversionResult: number | null,
    date: string) => {
    const newHistoryRecord = {
      exchangeFrom: submittedCurrencyData?.exchangeFrom,
      exchangeTo: submittedCurrencyData?.exchangeTo,
      amount: submittedCurrencyData?.amount,
      conversionResult: conversionResult,
      date: date
    }
    historyDataHandler(newHistoryRecord)
  }

  return (
      <ContainerWrapper>
        <Title>Konwerter Walut</Title>
        <ConverterForm addFormData={addFormData} />
      </ContainerWrapper>
  )
}

export default ConverterPage;
