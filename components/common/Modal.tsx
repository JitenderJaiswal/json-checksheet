import React, { ReactElement, ReactNode, forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { CloseButton } from './button/CustomButtons';
import Slide from '@mui/material/Slide';

interface TransitionProps {
  children: ReactElement;
}

const Transition = forwardRef<unknown, TransitionProps>((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

Transition.displayName = 'Transition';

const DialogCustom = styled(Dialog)(({ theme }) => ({
  // width: 'calc(100vw * (70 / 100))',
  '& .MuiPaper-root': {
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },

  '& .MuiDialogContent-root': {
    padding: theme.spacing(3),
    backgroundColor: '#fff',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const DialogTitleCustom: any = styled(DialogTitle)(
  ({ theme, background, color }: any) => ({
    background: background || theme.palette.secondary.main, // Use prop or fallback to theme
    color: color || '#f1f3f5',
    fontWeight: '600',
    padding: theme.spacing(2),
  })
);

interface iprops {
  title: string;
  sxDialogContent?: any;
  isRequireCloseButton?: boolean;
  dialogTitleCustomBackground?: any;
  dialogTitleCustomColor?: any;
  children: ReactNode;
  openModal: boolean;
  closeModal: () => void;
  isModalCloseBtn?: boolean;
}

const ModalCustom = (props: iprops) => {
  const {
    title,
    children,
    openModal,
    closeModal,
    isModalCloseBtn,
    sxDialogContent,
    dialogTitleCustomBackground,
    dialogTitleCustomColor,
    isRequireCloseButton = true,
  } = props;

  const handleClose = (event: object, reason: string) => {
    if (reason && reason == 'backdropClick') return;
    closeModal();
  };

  return (
    <DialogCustom
      onClose={handleClose}
      open={openModal}
      disableEscapeKeyDown={true}
      maxWidth={false}
      disableScrollLock
      TransitionComponent={Transition as React.ComponentType<any>}
      disableRestoreFocus
    >
      <DialogTitleCustom
        background={dialogTitleCustomBackground || false}
        color={dialogTitleCustomColor || false}
      >
        {title?.toUpperCase()}
      </DialogTitleCustom>
      <DialogContent
        dividers
        sx={{
          ...sxDialogContent,
        }}
      >
        {children}
      </DialogContent>
      {isRequireCloseButton ? (
        <div
          style={{
            position: 'absolute',
            right: '10px',
            top: '0px',
          }}
        >
          <CloseButton label="close" onClick={closeModal} />
        </div>
      ) : (
        ''
      )}
    </DialogCustom>
  );
};

export default ModalCustom;
