/** ----- object type should be passed!!! ---------------  
 we have an array of array object. Multidimentional
 First layer for the rows  [[] []] its has 2 TableRow
 Inside each array we have ojects [{},{},{}] for the TableCell
 * */

import { useState, useEffect } from 'react';

type TableHeaderObj = {
  text: string;
  component?: any;
  rowspan?: number;
  colspan?: number;
  style?: React.CSSProperties;
};

const TableHeaderHtmlCustom = ({
  tableHeaderObj,
  customStyle,
  stickStylesRow,
  sticky,
}: {
  tableHeaderObj: TableHeaderObj[][];
  customStyle?: React.CSSProperties;
  stickStylesRow?: any;
  sticky?: boolean;
}) => {
  const [rowHeights, setRowHeights] = useState<number[]>([]);

  useEffect(() => {
    if (sticky) {
      const heights: number[] = [];
      tableHeaderObj.forEach((row, index) => {
        const rowHeight =
          document.getElementById(`row-${index}`)?.clientHeight || 0;
        heights.push(rowHeight);
      });
      setRowHeights(heights);
    }
  }, [tableHeaderObj, sticky]);

  const calculateTopOffset = (index: number) => {
    return rowHeights.slice(0, index).reduce((acc, height) => acc + height, 0);
  };

  return (
    <>
      {tableHeaderObj.map((row, index) => (
        <tr
          id={`row-${index}`}
          style={{
            padding: '10px',
            width: '100%',
            ...customStyle,
            ...stickStylesRow,
            ...(sticky && {
              position: 'sticky',
              top: calculateTopOffset(index),
              border: '1px solid #212529',
              zIndex: 2,
              backgroundColor: 'white',
            }),
          }}
          key={`row-${index}`}
        >
          {row?.map((col, colIdx) => (
            <th
              key={`col-${index}-${colIdx}`}
              align="center"
              style={{ ...col?.style }}
              rowSpan={col?.rowspan || 1}
              colSpan={col?.colspan || 1}
            >
              {col?.text}
              {col?.component && col.component}
            </th>
          ))}
        </tr>
      ))}
    </>
  );
};

export default TableHeaderHtmlCustom;
