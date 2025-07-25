import React from 'react';
import Styled from 'styled-components';

import { images, textInputs } from '../../utils/constants/constant';

interface IProps {
  colSpan: number;
  rowSpan: number;
  labels: string[];
  values: string[];
  heading: string;
  style?: any;
}

export const CenteredLogoImg = Styled.div`
   & > img {
     position: absolute;
     left: 3rem;
     bottom:0.5rem;
     width:100px;
     height:90px;
   } 

  & > span {
    font-weight:bold !important;
  }
`;
const TableCompHead = ({
  colSpan,
  rowSpan,
  labels,
  values,
  heading,
  style,
}: IProps) => {
  return (
    <React.Fragment>
      {Array.from({ length: rowSpan }, () => 0).map((_, index: number) => (
        <tr key={index + 5 + 'tHeader'} style={{ ...style }}>
          {index === 0 && (
            <th
              data-img={images.moduleCompanyImgHeader}
              colSpan={
                labels?.length > 0 && values?.length > 0 ? colSpan - 2 : colSpan
              }
              rowSpan={rowSpan}
              align="left"
              style={{
                fontSize: '2rem',
                textAlign: 'center',
                height: '100px',
                position: 'relative',
              }}
            >
              <CenteredLogoImg>
                <img
                  src={images.moduleCompanyImgHeader}
                  alt={textInputs.companyName}
                />
                <span>{textInputs.companyName}</span>
              </CenteredLogoImg>
            </th>
          )}
          {labels?.length > 0 && <th>{labels[index]}</th>}
          {values?.length > 0 && <th>{values[index]}</th>}
        </tr>
      ))}
      <tr>
        <td
          colSpan={colSpan}
          style={{
            fontSize: '2rem',
            textAlign: 'center',
            fontWeight: 600,
            backgroundColor: '#63C4EF',
            color: '#343a40',
            border: '1px solid black',
            textTransform: 'uppercase',
          }}
        >
          {heading}
        </td>
      </tr>
    </React.Fragment>
  );
};
export default TableCompHead;
