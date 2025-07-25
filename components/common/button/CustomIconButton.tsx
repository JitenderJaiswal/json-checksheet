import { Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import CachedIcon from '@mui/icons-material/Cached';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Block } from '@mui/icons-material';
import ListIcon from '@mui/icons-material/List';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import VerifiedIcon from '@mui/icons-material/Verified';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { FaCopy } from 'react-icons/fa';
import { BsFillCloudArrowUpFill } from 'react-icons/bs';
import { BsFillCloudUploadFill } from 'react-icons/bs';
import { MdAddPhotoAlternate } from 'react-icons/md';
import { BsStars } from 'react-icons/bs';

interface PropTypes {
  children: any;
  color?: any;
  onClick?: () => void;
  size?: 'small' | 'small' | 'medium';
  disabled?: boolean;
  // variant?: "text" | "outlined" | "contained";
  sx?: {};
  tooltipTitle: string;
}

export function CustomIconButton(props: PropTypes) {
  const {
    children,
    color,
    disabled,
    onClick,
    size,
    sx,
    tooltipTitle,
    ...rest
  } = props;
  return (
    <Tooltip title={tooltipTitle}>
      <IconButton
        disabled={disabled ? true : false}
        color={color ? color : 'primary'}
        size={size ? size : 'small'}
        sx={sx}
        onClick={onClick}
        {...rest}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
}

export const ListIconButton = ({
  onClick,
  tooltipTitle,
}: {
  onClick?: () => void;
  tooltipTitle: string;
}) => {
  return (
    <CustomIconButton
      tooltipTitle={tooltipTitle}
      color="secondary"
      sx={{ m: 1 }}
      disabled={false}
      size="small"
      onClick={onClick}
    >
      <ListIcon sx={{ m: 0 }} />
    </CustomIconButton>
  );
};

export const EditIconButton = ({
  onClick,
  tooltipTitle,
  style,
}: {
  onClick?: () => void;
  tooltipTitle: string;
  style?: any;
}) => {
  return (
    <CustomIconButton
      tooltipTitle={tooltipTitle}
      color="secondary"
      sx={{ m: 1 }}
      disabled={false}
      size="small"
      onClick={onClick}
    >
      <EditIcon sx={{ m: 0, ...style }} />
    </CustomIconButton>
  );
};

export const ViewIconButton = ({
  onClick,
  tooltipTitle,
  sx,
}: {
  onClick?: () => void;
  tooltipTitle: string;
  sx?: any;
}) => {
  return (
    <CustomIconButton
      tooltipTitle={tooltipTitle}
      color="blueButton"
      sx={{ m: 1, ...sx }}
      disabled={false}
      size="small"
      onClick={onClick}
    >
      <VisibilityIcon sx={{ color: '#265988' }} />
    </CustomIconButton>
  );
};

export const DeleteIconButton = ({
  onClick,
  tooltipTitle,
  style,
  sx,
  disabled,
}: {
  onClick?: () => void;
  tooltipTitle: string;
  style?: any;
  sx?: any;
  disabled?: any;
}) => {
  return (
    <CustomIconButton
      tooltipTitle={tooltipTitle?.toUpperCase()}
      color="blueButton"
      sx={{ m: 1, ...sx }}
      disabled={disabled || false}
      size="small"
      onClick={onClick}
    >
      <DeleteIcon sx={{ color: '#c92a2a', ...style }} />
    </CustomIconButton>
  );
};
export const BlockIconButton = () => {
  return (
    <CustomIconButton
      tooltipTitle="Block"
      color="blueButton"
      sx={{ m: 1 }}
      disabled={false}
      size="small"
    >
      <Block sx={{ color: '#c92a2a' }} />
    </CustomIconButton>
  );
};
export const AddIconButton = ({
  onClick,
  tooltipTitle,
  disabled,
}: {
  onClick?: () => void;
  tooltipTitle: string;
  disabled?: boolean;
}) => {
  return (
    <CustomIconButton
      tooltipTitle={tooltipTitle}
      color="blueButton"
      sx={{ m: 1 }}
      disabled={false}
      size="small"
      onClick={onClick}
    >
      <AddIcon sx={{ color: '#265988' }} />
    </CustomIconButton>
  );
};

export const SendIconButton = ({
  onClick,
  tooltipTitle,
  disabled,
}: {
  onClick?: () => void;
  tooltipTitle: string;
  disabled?: boolean;
}) => {
  return (
    <CustomIconButton
      tooltipTitle={tooltipTitle}
      color="blueButton"
      sx={{ m: 1 }}
      disabled={false}
      size="small"
      onClick={onClick}
    >
      <ArrowForwardIcon sx={{ color: '#265988' }} />
    </CustomIconButton>
  );
};
export const ReceiveIconButton = ({
  onClick,
  tooltipTitle,
  disabled,
}: {
  onClick?: () => void;
  tooltipTitle: string;
  disabled?: boolean;
}) => {
  return (
    <CustomIconButton
      tooltipTitle={tooltipTitle}
      color="blueButton"
      sx={{ m: 1 }}
      disabled={false}
      size="small"
      onClick={onClick}
    >
      
      <ArrowBackIcon sx={{ color: '#265988' }} />
    </CustomIconButton>
  );
};
export const SentIconButton = ({
  onClick,
  tooltipTitle,
  disabled,
}: {
  onClick?: () => void;
  tooltipTitle: string;
  disabled?: boolean;
}) => {
  return (
    <CustomIconButton
      tooltipTitle={tooltipTitle}
      color="blueButton"
      sx={{ m: 1 }}
      disabled={false}
      size="small"
      onClick={onClick}
    >
      
      <CachedIcon sx={{ color: '#265988' }} />
    </CustomIconButton>
  );
};

export const RemoveIconButton = ({
  onClick,
  tooltipTitle,
}: {
  onClick?: () => void;
  tooltipTitle: string;
}) => {
  return (
    <CustomIconButton
      tooltipTitle={tooltipTitle}
      color="blueButton"
      sx={{ m: 1 }}
      disabled={false}
      size="small"
      onClick={onClick}
    >
      <RemoveIcon sx={{ color: '#c92a2a' }} />
    </CustomIconButton>
  );
};

export const CardIconButton = ({
  onClick,
  tooltipTitle,
}: {
  onClick?: () => void;
  tooltipTitle: string;
}) => {
  return (
    <CustomIconButton
      tooltipTitle={tooltipTitle}
      color="blueButton"
      sx={{ m: 1 }}
      disabled={false}
      size="small"
      onClick={onClick}
    >
      <RestorePageIcon sx={{ color: '#ebc934' }} />
    </CustomIconButton>
  );
};

export const CheckIconButton = ({
  onClick,
  tooltipTitle,
  style,
}: {
  onClick?: () => void;
  tooltipTitle: string;
  style?: any;
}) => {
  return (
    <CustomIconButton
      tooltipTitle={tooltipTitle}
      color="secondary"
      sx={{ m: 1 }}
      disabled={false}
      size="small"
      onClick={onClick}
    >
      <VerifiedIcon sx={{ m: 0, ...style, color: '#40c057' }} />
    </CustomIconButton>
  );
};

// new control plan fmea and pfd icon button
export const AddProcessIconButton = ({
  onClick,
  sx,
  label,
}: {
  onClick?: () => void;
  sx?: any;
  label: string;
}) => {
  return (
    <Tooltip title={label?.toUpperCase()} enterDelay={300} leaveDelay={200}>
      <IconButton
        color="primary"
        sx={{
          '&:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.04)',
          },
          ...sx,
        }}
        onClick={onClick}
        aria-label={label}
      >
        <AddCircleOutlineIcon />
      </IconButton>
    </Tooltip>
  );
};

// new control plan fmea and pfd icon button
export const CopyProcessIconButton = ({
  onClick,
  sx,
  tooltipTitle,
}: {
  onClick?: () => void;
  sx?: any;
  tooltipTitle: string;
}) => {
  return (
    <CustomIconButton
      tooltipTitle={tooltipTitle.toUpperCase()}
      color="blueButton"
      sx={{
        '&:hover': {
          backgroundColor: 'rgba(25, 118, 210, 0.04)',
        },
      }}
      disabled={false}
      size="small"
      onClick={onClick}
    >
      <FaCopy style={{ color: '#343a40', ...sx }} />
    </CustomIconButton>
  );
};
// new control plan fmea and pfd icon button
export const UploadIconButton = (props: {
  onChange: (e: any) => void;
  accept?: string;
  sx?: any;
  multiple?: boolean;
  id?: string;
  tooltipTitle: string;
}) => {
  const { onChange, accept, multiple, id, tooltipTitle, sx } = props;
  return (
    <>
      <div>
        <input
          id={id ? id : 'contained-button-file'}
          type="file"
          name={'excelFile'}
          multiple={multiple}
          accept={
            accept ||
            '.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
          }
          onChange={onChange}
          style={{ display: 'none' }}
        />
        <label htmlFor={id ? id : 'contained-button-file'}>
          <Tooltip
            title={tooltipTitle?.toUpperCase()}
            enterDelay={300}
            leaveDelay={200}
          >
            <IconButton
              component="span"
              color="primary"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(25, 118, 210, 0.04)',
                },
                ...sx,
              }}
            >
              <BsFillCloudUploadFill style={{ color: '#285efe', ...sx }} />
            </IconButton>
          </Tooltip>
        </label>
      </div>
    </>
  );
};
export const UploadImageIconButton = (props: {
  onChange: (e: any) => void;
  accept?: string;
  sx?: any;
  multiple?: boolean;
  id?: string;
  tooltipTitle: string;
}) => {
  const { onChange, accept, multiple, id, tooltipTitle, sx } = props;
  return (
    <>
      <div>
        <input
          id={id ? id : 'contained-button-file'}
          type="file"
          name={'excelFile'}
          multiple={multiple}
          accept={accept || 'image/png,image/jpeg,image/jpg,application/pdf'}
          onChange={onChange}
          style={{ display: 'none' }}
        />
        <label htmlFor={id ? id : 'contained-button-file'}>
          <Tooltip
            title={tooltipTitle?.toUpperCase()}
            enterDelay={300}
            leaveDelay={200}
          >
            <IconButton
              component="span"
              color="primary"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(25, 118, 210, 0.04)',
                },
                ...sx,
              }}
            >
              <MdAddPhotoAlternate style={{ ...sx }} />
            </IconButton>
          </Tooltip>
        </label>
      </div>
    </>
  );
};
