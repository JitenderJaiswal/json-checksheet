import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

/** ----- object type should be passed!!! ---------------  
 we have an array of array object. Multidimentional
 First layer for the rows  [[] []] its has 2 TableRow
 Inside each array we have ojects [{},{},{}] for the TableCell
 * */

type TableHeaderObj = {
  text: string;
  rowspan?: number;
  colspan?: number;
  style?: {};
};

const TableHeaderCustom = ({
  tableHeaderObj,
}: {
  tableHeaderObj: TableHeaderObj[][];
}) => {
  return (
    <>
      <TableHead>
        {tableHeaderObj.map((row, index) => (
          <TableRow
            style={{
              backgroundColor: 'white',
              padding: '6px',
              textTransform: 'uppercase',
            }}
            key={`${row}cols`}
          >
            {row.map((col, colIdx) => (
              <TableCell
                key={`${colIdx}cols`}
                style={{ fontWeight: 'bold', ...col?.style }}
                align="center"
                rowSpan={col?.rowspan || 1}
                colSpan={col?.colspan || 1}
              >
                {col.text}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
    </>
  );
};

export default TableHeaderCustom;
