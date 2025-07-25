import styled from 'styled-components';
import { TableRow, TableCell } from '@mui/material';

export const StyledTableRow: any = styled(TableRow)`
  background: ${(props: any) =>
    props?.index % 2 === 0 ? 'fefefe' : '#f1f3f5'};
`;

export const StyledTableCell: any = styled(TableCell)`
  border: 1px dashed #495057 !important;
`;

export const CircleIndicator: any = styled.div`
  background: ${(props: any) => props.background || '#51cf66'};
  border-radius: 50%;
  width: ${(props: any) => props.width || '20px'};
  height: ${(props: any) => props.height || '20px'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  color: #f8f9fa;
  opacity: ${(props: any) => props.opacity || '1'}; /* Default opacity is 1 */
`;
