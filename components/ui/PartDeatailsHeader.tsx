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
  partName: string;
  partNumber: string;
}
const PartDetailsHeader = (props: Iobj) => {
  const { partName, partNumber } = props;
  return (
    <AppBar
      position="static"
      color="secondary"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '-5px',
        fontSize: '1.2rem',
        padding: '0.75rem 1rem',
        borderTop: '1px solid #494949',
        borderBottom: '1px solid #494949',
        letterSpacing: '0.3em',
        height: '50px',
        color: '#f8f9fa',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6">
        PART NAME: <span style={{ fontWeight: '300' }}>{partName}</span>
      </Typography>
      <Typography variant="h6">
        PART NUMBER : <span style={{ fontWeight: '300' }}>{partNumber}</span>
      </Typography>
    </AppBar>
  );
};

export default PartDetailsHeader;
