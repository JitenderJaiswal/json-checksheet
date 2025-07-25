import styled from 'styled-components';
import { ReactNode } from 'react';
import { styled as muiStyled, createTheme, ThemeProvider } from '@mui/system';
import Box from '@mui/material/Box';
interface StyledFieldProps {
  columns?: number;
  rows?: number;
  gap?: string;
  style?: any;
}

export const StyledField = styled.div<StyledFieldProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 3}, 1fr);
  padding: 2rem;
  align-items: center;
  column-gap: ${(props) => props.gap || '2rem'};
  grid-template-rows: repeat(${(props) => props.rows || 4}, 80px);
`;

interface StyledNotesFieldProps {
  rows?: number;
}

export const StyledNotesField = styled.div<StyledNotesFieldProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(${(props) => props.rows || 1}, 1fr);
`;

const FormControlMui = ({
  handleSubmit,
  children,
  style,
}: {
  handleSubmit?: (e: object) => void;
  children: ReactNode;
  style?: { [key: string]: string | number };
}) => {
  return (
    <Box
      component="form"
      sx={{
        display: 'grid',
        gridTemplateColumns: '4fr 1fr',
        width: '100%',
        height: 'calc(100vh * (55 / 100))',
        ...style,
        // width: 'calc(100vw * (70 / 100))',
      }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      {children}
    </Box>
  );
};

export default FormControlMui;
