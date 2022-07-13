import React, { FC, Fragment, Key } from "react";
import { HistoryRecords } from "../../interfaces/dbData";

interface Props {
  historyRecords: HistoryRecords[]
  historyDataDelete:(updatedRecords: HistoryRecords[]) => void
}

const ConvertsHistory:FC<Props> = ({historyRecords, historyDataDelete}) => {
  const handleDelete = (item: React.Key) => {
    const updatedRecords = historyRecords.filter((v, i) => i !== item)
    historyDataDelete(updatedRecords);
  }

  const showRecords = () => {
    return historyRecords.map((item : HistoryRecords, index: Key) => {
      return (
        <Fragment key={index}>
          <div >{item.date}</div>
          <div onClick={() => handleDelete(index)}>X</div>
        </Fragment>
      )
    })
  }

  return (
    <div>
      {showRecords()}
    </div>
  )
}

export default ConvertsHistory;
