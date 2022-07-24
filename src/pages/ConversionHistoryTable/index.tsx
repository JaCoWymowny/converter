import React, { FC, Key } from "react";

import { HistoryRecords } from "../../interfaces/dbData";

import {
  Container,
  TableWrapper,
  Close,
  RightArrow
} from "./styles";

interface Props {
  historyRecords: HistoryRecords[]
  historyDataDelete:(updatedRecords: HistoryRecords[]) => void
}

const ConversionHistoryTable:FC<Props> = ({historyRecords, historyDataDelete}) => {
  const handleDelete = (item: React.Key) => {
    const updatedRecords = historyRecords.filter((v, i) => i !== item)
    historyDataDelete(updatedRecords);
  }

  const showRecords = () => {
    return historyRecords.map((item : HistoryRecords, index: Key) => {
      return (
        <tr className="row" key={index}>
          <td className="first-tbody-cell tbody-cell" ><Close className='button' onClick={() => handleDelete(index)} /></td>
          <td className="second-tbody-cell tbody-cell">{item.date}</td>
          <td className="third-tbody-cell tbody-cell">{item.amount} {item.exchangeFrom}</td>
          <td className="fourth-tbody-cell tbody-cell"><RightArrow /></td>
          <td className="fifth-tbody-cell tbody-cell">{item.conversionResult} {item.exchangeTo}</td>
        </tr>
      )
    })
  }

  return (
    <Container>
      <TableWrapper>
        <table>
          <thead>
          <tr>
            <th className="first-thead-cell thead-cell">Usuń rekord</th>
            <th className="second-thead-cell thead-cell">Data</th>
            <th className="third-thead-cell thead-cell">Przed Konwersją</th>
            <th className="fourth-thead-cell thead-cell"></th>
            <th className="fifth-thead-cell thead-cell">Po konwersji</th>
          </tr>
          </thead>
          <tbody>
            {showRecords()}
          </tbody>
        </table>
      </TableWrapper>
    </Container>
  )
}

export default ConversionHistoryTable;
