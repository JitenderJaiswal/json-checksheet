import { ReactNode } from 'react';
import Table from '@mui/material/Table';
import { useMemo } from 'react';
import { styled as muiStyled } from '@mui/system';

import TableHeaderCustom from './TableHeaderCustom';
import { Box } from '@mui/material';
import TableScroll from '../../ui/renderTable/TableScroll';

export const TableStyled = muiStyled(Table)({
  width: '100%',
  marginTop: '1.5rem',
  margin: '0 10px',
  '.MuiTableCell-root': {
    padding: '5px 8px',
    fontSize: '1.4rem',
    borderCollapse: 'collapse',
  },
});

type TableHeaderObj = {
  text: string;
  rowspan?: number;
  colspan?: number;
  style?: {};
};

const TableCustom = ({
  size,
  tableHeaderObj,
  children,
  overflow,
}: {
  size?: 'small' | 'medium' | undefined;
  tableHeaderObj: TableHeaderObj[][];
  children?: ReactNode;
  overflow?: Boolean;
}) => {
  return (
    <Box sx={{ ...(overflow && { overflowX: 'auto' }) }}>
      <TableScroll>
        <TableStyled size={size ? size : 'small'}>
          {useMemo(
            () => (
              <TableHeaderCustom tableHeaderObj={tableHeaderObj} />
            ),
            [tableHeaderObj]
          )}
          {children}
        </TableStyled>
      </TableScroll>
    </Box>
  );
};

export default TableCustom;
