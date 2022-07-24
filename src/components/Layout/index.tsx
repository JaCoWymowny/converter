import { useEffect, useState } from "react";
import {
  Route,
  Routes
} from "react-router-dom";

import { HistoryRecords } from "../../interfaces/dbData";
import { getDataFromLocalStorage } from "../../services/getDataFromLocalStorage";

import Converter from "../../pages/ConverterPageWithForm";
import ConversionHistoryTable from "../../pages/ConversionHistoryTable";

import {
  BackgroundContainerWrapper,
  FirstRouteWrapper,
  HistoryRouterWrapper
} from "./styles";

const Layout = () => {
  const [historyRecords, setHistoryRecords] = useState<HistoryRecords[]>(getDataFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('HistoryRecords', JSON.stringify(historyRecords));
  }, [historyRecords]);

  const historyRecordDataHandler = (newHistoryItem: HistoryRecords) => {
    setHistoryRecords([...historyRecords, newHistoryItem])
  }

  const historyDataDelete = (updatedRecords: HistoryRecords[]) => {
    setHistoryRecords(updatedRecords);
  }

  return (
    <BackgroundContainerWrapper>
      <Routes>
        <Route path="/" element={
          <FirstRouteWrapper>
            <Converter historyRecordDataHandler={historyRecordDataHandler}/>
          </FirstRouteWrapper>
        }
        />
        <Route path="/Converter-With-History" element={
          <HistoryRouterWrapper>
            <Converter historyRecordDataHandler={historyRecordDataHandler}/>
            <ConversionHistoryTable historyRecords={historyRecords} historyDataDelete={historyDataDelete}/>
          </HistoryRouterWrapper>
        }
        />
      </Routes>
    </BackgroundContainerWrapper>
  )
}

export default Layout;
