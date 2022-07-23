import React from "react";
import {
  CurrencyResult,
  Placeholder
} from "../components/ConverterForm/styles";

export const currencyResultHandler = (currencyResult: number, chosenCurrencyValue: string ) => {
  return (
    currencyResult === 0 ?
      <CurrencyResult>
        <Placeholder>Wynik</Placeholder>
        <Placeholder className="placeholder-margin">{chosenCurrencyValue}</Placeholder>
      </CurrencyResult>
      :
      <CurrencyResult>
        <Placeholder>{currencyResult}</Placeholder>
        <Placeholder>{chosenCurrencyValue}</Placeholder>
      </CurrencyResult>
  )
}



