import React, { FC, Key, useState } from "react";
import { ExchangeFormData, Options } from "../../interfaces/dbData";

const options: Options[] = [
  {
    value: "EUR"
  },
  {
    value: "DOL"
  },
  {
    value: "GBP"
  }
]

interface Props {
  addFormData: (submittedCurrencyData: ExchangeFormData) => void
}

const ConverterForm:FC<Props> = ({ addFormData }) => {
  const [numberValue, setNumberValue] = useState('');
  const [optionExchangeFrom, setOptionExchangeFrom] = useState('');
  const [optionExchangeFor, setOptionExchangeFor] = useState('');


  const onChangeExchangeFromSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionExchangeFrom(event.target.value)
  }

  const onChangeExchangeForSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionExchangeFor(event.target.value);
  }

  const handleOptions = () => {
    return options.map((item, index: Key) => {
      return (
        <option key={index}>{item.value}</option>
      )
    })
  }

  const createDataToSave = () => {
    let currencyData: ExchangeFormData = {
      exchangeFrom: optionExchangeFrom,
      exchangeTo: optionExchangeFor,
      amount: parseInt(numberValue)
    }
    addFormData(currencyData)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createDataToSave();
    setNumberValue('');
    setOptionExchangeFrom('')
    setOptionExchangeFor('');
  }
  return (
  <form style={{ display: "inline-grid", gridTemplateColumns: "auto auto", gridGap: "10px 50px" }}
        onSubmit={handleSubmit}
  >
    <label>
      Przelicz z
    </label>
    <select onChange={onChangeExchangeFromSelect} value={optionExchangeFrom} id="options" name="options">
      <option>select a currency</option>
      {handleOptions()}
    </select>
    <label>
      Przelicz na
    </label>
    <select onChange={onChangeExchangeForSelect} value={optionExchangeFor} id="options" name="options">
      <option>select a currency</option>
      {handleOptions()}
    </select>
    <label>
      Kwota
    </label>
    <input
      type="number"
      value={numberValue}
      onChange={(e) => {
        setNumberValue(e.target.value)}}
    />
    <button type='submit'
    >
      Konwertuj
    </button>
  </form>
  )
}

export default ConverterForm;
