import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Iprops {
  title: string;
  open: any;
  setOpen: any;
  children: any;
  onConfirm: any;
  isSubmitContent?: Boolean;
  itemPartName?: string;
  id?: string | null;
  itemDetail?: string | null;
}

const DialogCustom = styled(Dialog)(({ theme }) => ({
  // width: 'calc(100vw * (70 / 100))',
  width: '100',

  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const DialogTitleCustom = styled(DialogTitle)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: '#f1f3f5',
  fontWeight: '400',
}));
const DialogContentBoxCustom = styled(DialogContentText)(({ theme }) => ({
  fontWeight: '400',
  width: '500px',
  margin: '1rem',
}));
const ConfirmDialogueForInput = (props: Iprops) => {
  const {
    title,
    children,
    open,
    setOpen,
    onConfirm,
    isSubmitContent, // is submitContent is for classes for styling button blue or red depend on situation
    id,
    itemDetail,
  } = props;

  return (
    <DialogCustom
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="confirm-dialog"
    >
      <DialogTitleCustom id="confirm-dialog">{title}</DialogTitleCustom>
      <DialogContentBoxCustom style={{ marginTop: '1rem' }}>
        {children}
      </DialogContentBoxCustom>
      <DialogActions>
        <Button
          variant="contained"
          style={{
            backgroundColor: isSubmitContent ? '#003566' : '#c80202',
            color: '#fafafa',
          }}
          // onClick={() => {
          //   if (itemPartName === textFieldValue) {
          //     console.log(itemPartName, itemId);
          //     if (itemPartName && itemId) {
          //       onConfirm(itemId);
          //       setTextFieldValue('');
          //       setOpen(false);
          //       return;
          //     }
          //     if (itemPartName) {
          //       onConfirm(itemPartName);
          //       setTextFieldValue('');
          //       setOpen(false);
          //       return;
          //     }
          //   }
          // }}
          onClick={onConfirm}
        >
          Yes
        </Button>

        <Button
          variant="contained"
          onClick={() => setOpen(false)}
          style={{ backgroundColor: '#fafafa', color: 'black' }}
        >
          No
        </Button>
      </DialogActions>
    </DialogCustom>
  );
};

export default ConfirmDialogueForInput;
