import Close from '@mui/icons-material/Close';
import { Menu, IconButton, MenuItem } from '@mui/material';
import { Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';

interface message {
  link: string;
  title: string;
  _id: string;
  body: string;
  createdAt: string;
}

interface IProps {
  isNotification: boolean;
  setIsNotification: React.Dispatch<React.SetStateAction<boolean>>;
  removeMsg: (id: string) => void;
  removeCategory: (category: string) => void; 
  messages: { [key: string]: message[] };
  anchorEl: any;
}

const Notification = ({
  isNotification,
  setIsNotification,
  messages,
  removeMsg,
  removeCategory,
  anchorEl,
}: IProps) => {
  const navigate = useNavigate();
  return (
    <Menu
      id="simple-menu"
      keepMounted
      anchorEl={anchorEl}
      open={isNotification}
      onClose={() => setIsNotification(false)}
      sx={{
        '.MuiMenu-paper': {
          width: 'fit-content',
          top: '50px',
          padding: 0.3,
        },
      }}
    >
      {Object.keys(messages).length === 0 ? (
        <MenuItem>No New Notification</MenuItem>
      ) : (
        <>
          {Object.keys(messages).map((key) => {
            return (
              <>
               <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#f5f5f5',
                  borderBottom: '1px solid #e0e0e0',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    marginLeft: '1.5rem',
                    textTransform: 'uppercase',
                    fontWeight: '600',
                    textDecoration: 'underline',
                  }}
                >
                  {key}
                </span>
                <span
                  style={{
                    fontSize: '1.5rem',
                    marginLeft: '1.5rem',
                    textTransform: 'uppercase',
                    fontWeight: '600',
                    textDecoration: 'none',
                    cursor:'pointer',
                  }}
                  onClick={() => removeCategory(key)}
                >
                  CLEAR ALL
                </span>
                </Stack>
                {/* <span
                  style={{
                    fontSize: '1.5rem',
                    marginLeft: '1.5rem',
                    textTransform: 'uppercase',
                    fontWeight: '600',
                    textDecoration: 'underline',
                  }}
                >
                  {key}
                </span> */}
                {messages[key].map((msg, index: number) => (
                  <Stack
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection="row"
                    sx={{
                      width: '100%',
                    }}
                  >
                    <MenuItem
                      key={msg._id}
                      onClick={() => {
                        navigate(msg.link);
                      }}
                    >
                      <span
                        style={{
                          fontWeight: '500',
                          fontSize: '1.4rem',
                        }}
                      >
                        {msg.body}
                      </span>
                    </MenuItem>
                    <IconButton
                      style={{
                        padding: '8px',
                        margin: '0',
                      }}
                      onClick={() => removeMsg(msg._id)}
                    >
                      <Close style={{ color: 'red' }} />
                    </IconButton>
                  </Stack>
                ))}
              </>
            );
          })}
        </>
      )}
    </Menu>
  );
};

export default Notification;
