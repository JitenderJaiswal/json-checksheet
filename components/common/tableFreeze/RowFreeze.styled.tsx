import styled from 'styled-components';

export const StyledTableHeaderRow = styled.tr<{
  top?: string;
  zIndex?: number;
}>`
  top: ${(props: any) => (props?.top ? props?.top : '1px')};
  z-index: ${(props: any) => (props?.zIndex ? props?.zIndex : 2)};
  position: sticky;
  width: '100%';
  border: 1px solid black;
  background-color: #4f81bd;
  height: 50px;
  color: #fff;
`;

export const StyledTableHeaderRowHead = styled.thead<{
  top?: string;
  zIndex?: number;
}>`
  top: ${(props: any) => (props?.top ? props?.top : '1px')};
  z-index: ${(props: any) => (props?.zIndex ? props?.zIndex : 2)};
  position: sticky;
  width: '100%';
  border: 1px solid black;
  background-color: #4f81bd;
  height: 50px;
  color: #fff;
`;
