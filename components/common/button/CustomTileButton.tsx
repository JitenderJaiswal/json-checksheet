import React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { CustomButton } from './CustomButtons';

interface Iprop {
  icon?: any;
  label: string;
  url: string;
  sx?: object;
}
const CustomTileButton = ({ label, url, icon, sx }: Iprop) => {
  return (
    <>
      <div
        style={{
          marginRight: '8px',
        }}
      >
        <Link to={url} style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            sx={sx}
            startIcon={(icon && icon) || <AddIcon />}
          >
            {label}
          </Button>
        </Link>
      </div>
    </>
  );
};

export default CustomTileButton;
