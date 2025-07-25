import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import UpdateIcon from '@mui/icons-material/Update';
import BackupIcon from '@mui/icons-material/Backup';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SearchIcon from '@mui/icons-material/Search';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { BsStars } from 'react-icons/bs';
import { Download } from '@mui/icons-material';

interface PropTypes {
  icon?: React.ReactElement;
  children: any;
  // color?:
  //   | "primary"
  //   | "secondary"
  //   | "success"
  //   | "error"
  //   | "info"
  //   | "warning"
  //   | "blueButton"
  //   | "greenButton";
  color?: any;
  onClick?: () => void;
  size?: 'small' | 'large' | 'medium';
  disabled?: boolean;
  variant?: 'text' | 'outlined' | 'contained';
  sx?: {};
  type?: 'submit' | 'button' | 'reset';
  component?: string;
  target?: string;
  href?: string;
  className?: any;
}

export function CustomButton(props: PropTypes) {
  const {
    children,
    color,
    variant,
    disabled,
    onClick,
    size,
    sx,
    icon,
    type,
    className,
    ...rest
  } = props;
  return (
    <Button
      className={className}
      disabled={disabled ? true : false}
      color={color ? color : 'primary'}
      size={size ? size : 'large'}
      variant={variant ? variant : 'contained'}
      sx={sx}
      startIcon={icon ? icon : <AddIcon />} // icons
      onClick={onClick}
      type={(type && type) || 'button'}
      {...rest}
    >
      {children}
    </Button>
  );
}

export const SaveButton = ({
  onClick,
  label,
  disabled,
}: {
  onClick?: () => void;
  label: string;
  disabled?: boolean;
}) => {
  return (
    <CustomButton
      color="blueButton"
      sx={{ margin: '10px' }}
      icon={<SaveIcon />}
      disabled={disabled || false}
      size="large"
      onClick={onClick}
    >
      {label}
    </CustomButton>
  );
};

export const UpdateButton = ({
  onClick,
  label,
  sx,
  size,
  ...rest
}: {
  onClick?: () => void;
  label: string;
  sx?: object;
  size?: 'small' | 'large' | 'medium';
}) => {
  return (
    <CustomButton
      color="greenButton"
      sx={sx}
      icon={<UpdateIcon />}
      disabled={false}
      onClick={onClick}
      size={size ? size : 'medium'}
      {...rest}
    >
      {label}
    </CustomButton>
  );
};

export const SubmitButton = ({
  onClick,
  label,
  type,
  sx,
  className,
  ...rest
}: {
  onClick?: () => void;
  label: string;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  sx?: any;
  className?: any;
}) => {
  // console.log(rest);
  return (
    <CustomButton
      className={className}
      color="greenButton"
      sx={{ margin: '10px', ...sx }}
      icon={<BackupIcon />}
      disabled={false}
      size="large"
      onClick={onClick}
      type={type}
      {...rest}
    >
      {label}
    </CustomButton>
  );
};
export const DeleteButton = ({
  onClick,
  label,
  type,
  sx,
  className,
  ...rest
}: {
  onClick?: () => void;
  label: string;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  sx?: any;
  className?: any;
}) => {
  // console.log(rest);
  return (
    <CustomButton
      className={className}
      color="greenButton"
      sx={{ margin: '10px', ...sx }}
      icon={<DeleteIcon />}
      disabled={false}
      size="large"
      onClick={onClick}
      type={type}
      {...rest}
    >
      {label}
    </CustomButton>
  );
};

export const CloseButton = ({
  onClick,
  label,
}: {
  onClick?: () => void;
  label: string;
}) => {
  return (
    <CustomButton
      color="primary"
      sx={{ margin: '10px' }}
      icon={<CloseIcon />}
      disabled={false}
      size="large"
      onClick={onClick}
    >
      {label}
    </CustomButton>
  );
};

export const AddButton = ({
  onClick,
  label,
  disabled = false,
  size,
}: {
  onClick?: () => void;
  label: string;
  disabled?: boolean;
  size?: 'small' | 'large' | 'medium';
  color?: any;
}) => {
  return (
    <CustomButton
      color={"greenButton"}
      sx={{ margin: '10px' }}
      icon={<AddIcon />}
      disabled={disabled || false}
      size={size ? size : 'medium'}
      onClick={onClick}
    >
      {label}
    </CustomButton>
  );
};

// create cp button
export const AddProcessButton = ({
  onClick,
  label,
  sx,
  ...rest
}: {
  onClick?: () => void;
  label: string;
  sx?: any;
  id?: any;
}) => {
  return (
    <CustomButton
      color="secondary"
      sx={{ margin: '2px', ...sx }}
      icon={<AddIcon />}
      disabled={false}
      onClick={onClick}
      {...rest}
    >
      {label}
    </CustomButton>
  );
};

export const CopyProcessButton = ({
  onClick,
  label,
  sx,
}: {
  onClick?: () => void;
  label: string;
  sx?: any;
}) => {
  return (
    <CustomButton
      color="primary"
      sx={{ margin: '2px', ...sx }}
      icon={<ContentCopyIcon />}
      disabled={false}
      onClick={onClick}
    >
      {label}
    </CustomButton>
  );
};
export const AddSpecsButton = ({
  onClick,
  label,
}: {
  onClick?: () => void;
  label: string;
}) => {
  return (
    <CustomButton
      color="blueButton"
      // size="medium"
      sx={{ margin: '2px' }}
      icon={<AddIcon />}
      disabled={false}
      onClick={onClick}
    >
      {label}
    </CustomButton>
  );
};
export const AIButton = ({
  onClick,
  label,
  sx,
  iconStyle,
  disabled,
}: {
  onClick?: () => void;
  label: string;
  sx?: any;
  iconStyle?: any;
  disabled?: boolean;
}) => {
  return (
    <CustomButton
      size="medium"
      sx={{ margin: '2px', background: '#212529', ...sx }}
      icon={<BsStars style={{ ...iconStyle }} />}
      disabled={false || disabled}
      onClick={onClick}
    >
      {label}
    </CustomButton>
  );
};

export const ExpandButton = ({
  onClick,
  label,
}: {
  onClick?: () => void;
  label: string;
}) => {
  return (
    <CustomButton
      color="blueButton"
      sx={{ margin: '2px' }}
      icon={<ExpandMoreIcon />}
      disabled={false}
      onClick={onClick}
    // size="medium"
    >
      {label}
    </CustomButton>
  );
};

export const CollapseButton = ({
  onClick,
  label,
}: {
  onClick?: () => void;
  label: string;
}) => {
  return (
    <CustomButton
      color="blueButton"
      sx={{ margin: '2px' }}
      icon={<ExpandLessIcon />}
      disabled={false}
      // size="medium"
      onClick={onClick}
    >
      {label}
    </CustomButton>
  );
};
export const SearchButton = ({
  onClick,
  label,
}: {
  onClick?: () => void;
  label: string;
}) => {
  return (
    <CustomButton
      color="info"
      sx={{ margin: '2px' }}
      icon={<SearchIcon />}
      disabled={false}
      // size="medium"
      onClick={onClick}
    >
      {label}
    </CustomButton>
  );
};

export const ClearButton = ({
  onClick,
  label,
}: {
  onClick?: () => void;
  label: string;
}) => {
  return (
    <CustomButton
      color="success"
      sx={{ margin: '2px' }}
      icon={<AutorenewIcon />}
      disabled={false}
      // size="medium"
      onClick={onClick}
    >
      {label}
    </CustomButton>
  );
};
// end of create cp button

//Download Button
export const DownloadButton = ({
  onClick,
  label,
  sx,
  size,
  ...rest
}: {
  onClick?: () => void;
  label: string;
  sx?: object;
  size?: 'small' | 'large' | 'medium';
}) => {
  return (
    <CustomButton
      color="greenButton"
      sx={sx}
      icon={<Download />}
      disabled={false}
      onClick={onClick}
      size={size ? size : 'medium'}
      {...rest}
    >
      {label}
    </CustomButton>
  );
};
