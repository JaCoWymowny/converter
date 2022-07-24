import { ExchangeFormData, HistoryRecords } from "../../interfaces/dbData";
import React, { FC, useEffect, useState } from "react";

import ConverterForm from "../../components/ConverterForm";
import useListOfCurrency from "../../hooks/useListOfCurrency";
import Modal from "../../components/Modal";
import LargeSpinner from "../../common/LargeSpinner";

import { ErrorMessage } from "../../components/ConverterForm/styles";
import {
  ContainerWrapper,
  Title
} from "./styles";


interface Props {
  historyRecordDataHandler: (newHistoryItem: HistoryRecords) => void
}

const ConverterPageWithForm: FC<Props> = ({ historyRecordDataHandler }) => {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const {
    currencyList,
    isDataLoading,
    isQueryError,
    queryError,
    isFetching
  } = useListOfCurrency();

  useEffect(() => {
    if (isQueryError) {
      setIsErrorModalOpen(true)
    }
  }, [isQueryError])

  const addFormDataToHistory = (
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
    historyRecordDataHandler(newHistoryRecord)
  }

  return (
    <ContainerWrapper>
      <Modal show={isErrorModalOpen} onClose={() => {
        setIsErrorModalOpen(false)
      }}>
        <ErrorMessage>{queryError?.message}</ErrorMessage>
      </Modal>
      <Title>Konwerter Walut</Title>
      {
        (!isDataLoading && currencyList) &&
        <ConverterForm addFormDataToHistory={addFormDataToHistory} currencyList={currencyList}/>
      }
      {isFetching && <LargeSpinner/>}
    </ContainerWrapper>
  )
}

export default ConverterPageWithForm;
