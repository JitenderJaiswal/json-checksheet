import { useState, ReactElement } from 'react';
import {
  Button,
  DialogActions,
  DialogContentText,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import styled from 'styled-components';

interface ConfirmationDialogProps {
  open: boolean;
}

const StyledDialog = styled(Dialog)<ConfirmationDialogProps>`
  & .MuiDialog-paper {
    margin: 5px;
  }

  & .MuiTypography-root {
    padding-bottom: 20px;
  }

  & .MuiDialog-paperWidthSm {
    max-width: 1500px;
    min-width: 50vh;
    min-height: 30vh;
    background-color: #fff;
    font-size: 1.5rem;
  }
`;

const StyledDialogTitle = styled(DialogTitle)`
  background-color: #212529;

  height: 60px;
  padding: 0.6rem 1rem;
  text-transform: uppercase;

  div {
    font-size: 1.5rem;
    font-weight: 400;
    font-family: Nunito;
    letter-spacing: 0.1em;
    color: #fff;
    margin-left: 0.6rem;
  }
`;

interface Props {
  isSubmitContent?: boolean;
}

type ConfirmReturnType = [
  (props: Props) => ReactElement | null,
  () => Promise<boolean>
];

const useConfirm = (title: string, message: string): ConfirmReturnType => {
  const [promise, setPromise] = useState<{
    resolve: (value: boolean) => void;
  } | null>(null);

  const confirm = () =>
    new Promise<boolean>((resolve, reject) => {
      setPromise({ resolve });
    });

  const handleClose = () => {
    setPromise(null);
  };

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const ConfirmationDialog = (props: Props) => (
    <StyledDialog open={promise !== null}>
      <StyledDialogTitle sx={{ color: '#fafafa' }}>{title}</StyledDialogTitle>
      <DialogContent>
        <DialogContentText style={{ marginTop: '1rem', color: 'black' }}>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleConfirm}
          style={{
            backgroundColor: props.isSubmitContent ? '#003566' : '#c80202',
            color: '#fafafa',
          }}
        >
          Yes
        </Button>
        <Button onClick={handleCancel} style={{ backgroundColor: '#fafafa' }}>
          No
        </Button>
      </DialogActions>
    </StyledDialog>
  );

  return [ConfirmationDialog, confirm];
};

export default useConfirm;
