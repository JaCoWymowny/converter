import {
  Route,
  Routes
} from "react-router-dom";
import Converter from "../../pages/Converter";
import ConvertsHistory from "../../pages/ConvertsHistory";
import { useEffect, useState } from "react";
import { HistoryRecords } from "../../interfaces/dbData";
import { getDataFromLocalStorage } from "../../helpers/getDataFromLocalStorage";

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

  console.log(historyRecords);

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <Converter historyDataHandler={historyDataHandler}/>
        }
        />
        <Route path="/ConverterWithHistory" element={
          <>
            <Converter historyDataHandler={historyDataHandler}/>
            <ConvertsHistory historyRecords={historyRecords} historyDataDelete={historyDataDelete}/>
          </>
        }
        />
      </Routes>
    </div>
  )
}

export default Layout;
