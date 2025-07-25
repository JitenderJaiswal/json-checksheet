import styled from 'styled-components';

export const StyledTableHeaderTh1 = styled.th<{
  left?: string;
  minWidth?: string;
  zIndex?: number;
  bgColor?: string;
}>`
  position: sticky;
  border: 1px solid black;
  text-align: center;
  z-index: ${(props: any) => (props?.zIndex ? props?.zIndex : 1)};
  color: ${(props: any) => (props?.color ? props?.color : '#000000')};
  background-color: ${(props: any) =>
    props?.bgColor ? props?.bgColor : '#4f81bd'};
  /* color: #fff; */
  left: ${(props: any) => (props?.left ? props?.left : '0px')};
  width: ${(props: any) => (props?.width ? props?.width : '50px')};
  height: ${(props: any) => (props?.height ? props?.height : 'auto')};
  min-width: ${(props: any) => (props?.minWidth ? props?.minWidth : '50px')};
`;
