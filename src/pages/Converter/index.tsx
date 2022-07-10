import ConverterForm from "../../components/ConverterForm";
import { ExchangeFormData } from "../../interfaces/dbData";
import { useEffect, useState } from "react";
import axios from "axios";

const ConverterPage = () => {
  const addFormData = (submittedCurrencyData: ExchangeFormData) => {
    console.log(submittedCurrencyData)
  }


  return (
    <div>
      <ConverterForm addFormData={addFormData}/>
    </div>
  )
}

export default ConverterPage;
