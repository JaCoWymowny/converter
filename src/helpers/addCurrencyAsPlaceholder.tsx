import { CurrencyResult, Placeholder } from "../components/ConverterForm/styles";
import React from "react";

export const currencyResultHandler = (currencyResult: number, chosenCurrencyValue: string ) => {
  if (currencyResult === 0) {
    return (
      <CurrencyResult>
        <Placeholder>Wynik</Placeholder>
      <Placeholder className="placeholder-margin">{chosenCurrencyValue}</Placeholder>
      </CurrencyResult>
    )
  } else {
    return (
      <CurrencyResult>
        <Placeholder>{currencyResult}</Placeholder>
        <Placeholder>{chosenCurrencyValue}</Placeholder>
      </CurrencyResult>
    )
  }
}
