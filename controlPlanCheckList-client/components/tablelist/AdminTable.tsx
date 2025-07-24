import React from 'react';
import { TableBody } from '@mui/material';
import { TableCustom } from '../../../../../components/common';
import formatDate from '../../../../../components/common/formatDate';
import {
  DeleteIconButton,
  EditIconButton,
  ViewIconButton,
} from '../../../../../components/common/button/CustomIconButton';
import { useNavigate } from 'react-router-dom';
import { moduleConstant, style1 } from '../../constant';
import {
  StyledTableCell,
  StyledTableRow,
} from '../../../../../components/ui/module.styled';

interface IProps {
  deleteDocument: (id: string) => void;
  tableData: {
    [key: string | number]: any;
  }[];
  page: any;
  perPage: any;
}

const Header = [
  [
    {
      text: '#',
      style: { ...style1 },
    },
    {
      text: 'Part Name',
      style: { ...style1 },
    },
    {
      text: 'Part Number',
      style: { ...style1 },
    },
    {
      text: 'Creation Date',
      style: { ...style1 },
    },
    {
      text: 'ACTION',
      style: {
        ...style1,
        backgroundColor: '#c92a2a',
      },
    },
  ],
];

const AdminTable = ({ deleteDocument, tableData, page, perPage }: IProps) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <TableCustom tableHeaderObj={Header}>
        <TableBody>
          {tableData.map(
            (document: { [key: string]: any }, documentIndex: number) => (
              <StyledTableRow
                index={documentIndex}
                key={documentIndex + 'admin'}
              >
                <StyledTableCell align="center">
                  {documentIndex + 1 + (page - 1) * perPage}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {document?.part_id?.part_name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {document?.part_id?.part_number}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {formatDate(document.module_date)}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <ViewIconButton
                    tooltipTitle="view"
                    onClick={() =>
                      navigate(
                        `${moduleConstant.createNavigation}/${document?._id}?isView=true`
                      )
                    }
                  />
                  <EditIconButton
                    tooltipTitle="edit"
                    onClick={() =>
                      navigate(
                        `${moduleConstant.createNavigation}/${document?._id}?isView=false`
                      )
                    }
                  />
                  <DeleteIconButton
                    tooltipTitle="delete"
                    onClick={() => deleteDocument(document._id)}
                  />
                </StyledTableCell>
              </StyledTableRow>
            )
          )}
        </TableBody>
      </TableCustom>
    </React.Fragment>
  );
};

export default AdminTable;
