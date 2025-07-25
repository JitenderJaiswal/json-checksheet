import { ReactNode } from 'react';
import { Table } from './styled';
import TableScroll from './TableScroll';
interface IProps {
  children?: ReactNode;
}
const RenderTable = ({ children, ...rest }: IProps) => {
  return (
    <TableScroll {...rest}>
      <Table id={'tableDownloadId'} cellSpacing={0}>
        {children}
      </Table>
    </TableScroll>
  );
};

export default RenderTable;
