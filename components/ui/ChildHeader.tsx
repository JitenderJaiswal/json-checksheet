import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { textInputs, images } from '../../utils/constants/constant';
import { useAuth } from '../../services/auth/AuthProvider';
import { ReactNode } from 'react';

interface Iobj {
  text: string;
  children?: ReactNode;
}
const ChildHeader = (props: Iobj) => {
  const { text, children } = props;
  return (
    <AppBar
      position="static"
      color="secondary"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '-5px',
        fontSize: '1.6rem',
        padding: '0.75rem 1rem',
        color: 'white',
        borderTop: '1px solid #494949',
        borderBottom: '1px solid #494949',
        letterSpacing: '0.4em',
        height: '70px',
        textTransform: 'uppercase',
        alignItems: 'center',
        fontWeight: '300',
      }}
    >
      <Typography variant="h5">{text}</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {children}
      </Box>
    </AppBar>
  );
};

export default ChildHeader;
