import {
  Route,
  Routes
} from "react-router-dom";
import Converter from "../../pages/Converter";
import ConvertsHistory from "../../pages/ConvertsHistory";
import { useEffect, useState } from "react";
import { HistoryRecords } from "../../interfaces/dbData";
import { getDataFromLocalStorage } from "../../helpers/getDataFromLocalStorage";
import { BackgroundContainerWrapper, ContainerWrapper } from "./styles";

const Layout = () => {
  const [historyRecords, setHistoryRecords] = useState<HistoryRecords[]>(getDataFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('HistoryRecords', JSON.stringify(historyRecords));
  }, [historyRecords]);

  const historyDataHandler = (newHistoryItem: HistoryRecords) => {
    setHistoryRecords([...historyRecords, newHistoryItem])
  }

  const historyDataDelete = (updatedRecords: HistoryRecords[]) => {
    setHistoryRecords(updatedRecords);
  }

  return (
    <BackgroundContainerWrapper>
      <Routes>
        <Route path="/" element={
          <ContainerWrapper style={{"height" : "40vh"}}>
            <Converter historyDataHandler={historyDataHandler}/>
          </ContainerWrapper>
        }
        />
        <Route path="/ConverterWithHistory" element={
          <>
            <ContainerWrapper>
              <Converter historyDataHandler={historyDataHandler}/>
              <ConvertsHistory historyRecords={historyRecords} historyDataDelete={historyDataDelete}/>
            </ContainerWrapper>
          </>
        }
        />
      </Routes>
    </BackgroundContainerWrapper>
  )
}

export default Layout;
