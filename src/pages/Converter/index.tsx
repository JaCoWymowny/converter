import { ExchangeFormData, HistoryRecords } from "../../interfaces/dbData";
import React, { FC, useEffect, useState } from "react";

import ConverterForm from "../../components/ConverterForm";
import useListOfCurrency from "../../hooks/useListOfCurrency";
import Modal from "../../components/Modal";

import { ErrorMessage } from "../../components/ConverterForm/styles";
import {
  ContainerWrapper,
  Title
} from "./styles";


interface Props {
  historyDataHandler: (newHistoryItem: HistoryRecords) => void
}

const ConverterPage: FC<Props> = ({ historyDataHandler }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    currencyList,
    isDataLoading,
    isQueryError,
    queryError,
    setHasError,
  } = useListOfCurrency();

  useEffect(() => {
    if (isQueryError) {
      setShowModal(true)
    }
  }, [isQueryError])

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
      <Modal show={showModal} onClose={() => {
        setShowModal(false)
        setHasError(false);
      }}>
        <ErrorMessage>{queryError?.message}</ErrorMessage>
      </Modal>
      <Title>Konwerter Walut</Title>
      {(!isDataLoading && currencyList) && <ConverterForm addFormData={addFormData} currencyList={currencyList}/>}
    </ContainerWrapper>
  )
}

export default ConverterPage;
