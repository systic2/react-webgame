import React, { useEffect, useRef, memo } from "react";
import Td from './Td'

const Tr = memo(({ rowIndex, rowData, dispatch }) => {
  console.log('tr rendered');

  const ref = useRef([]);
  useEffect(() => {
    console.log(rowIndex === ref.current[0], dispatch === ref.current[1], rowData === ref.current[2]);
    ref.current = [rowIndex, dispatch, rowData]
  }, [rowIndex, rowData, dispatch]);

  return (
    <tr>
      {Array(rowData.length)
      .fill()
      .map((td, i) => <Td key={i} dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]}></Td>)}
    </tr>
  )
})

export default Tr;