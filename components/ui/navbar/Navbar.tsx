import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import { useNavigate } from 'react-router-dom';

import { textInputs, images } from '../../../utils/constants/constant';
import { useAuth } from '../../../services/auth/AuthProvider';
import { useEffect, useState, useRef } from 'react';
import Drawer from './Drawer';
import { Stack } from '@mui/system';
import Notification from './Notification';
import axios from 'axios';
import Help from './Help';
function getMessageLength(messages: { [key: string]: [] }) {
  let length = 0;
  Object.keys(messages).forEach((key) => {
    messages[key].forEach(() => (length += 1));
  });
  return length;
}
const Navbar = () => {
  const navigate = useNavigate();
  const { state } = useAuth();
  const [messages, setMessages] = useState({});
  const [isNotification, setIsNotification] = useState(false);
  const messageLengthRef = useRef(0);
  const [render, setRender] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHelp, setIsHelp] = useState(false);
  const [anchorEl, setAchorEl] = useState<
    Element | ((element: Element) => Element) | null | undefined
  >(null);
  const nav_url: string =
    (state.user?.userType === 2 && '/admin/home') ||
    (state.user?.userType === 3 && '/supervisor/home') ||
    '/';
  useEffect(() => {
    axios.get(`/api/notification/${state.user?.userType}`).then((res) => {
      if (res.data) {
        setMessages(res.data);
        messageLengthRef.current = getMessageLength(res.data);
      }
    });
  }, [render]);

  async function removeMsg(id: string) {
    await axios.delete(`/api/notification/${id}`);
    setRender((prev) => !prev);
  }
  async function  removeCategory(category: string) {
    await axios.delete(`/api/notification/deleteByCategory/${encodeURIComponent(category)}`);
    setRender((prev) => !prev);
  }
  return (
    <Box sx={{ flexGrow: 1, minHeight: '66px', width: '100%' }}>
      <AppBar position="static" color="secondary">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon sx={{ fontSize: '2.5rem' }} />
            </IconButton>
            <div style={{ marginRight: '16px', marginTop: '-4px' }}>
              <img
                width="65px"
                height="23px"
                src={images.mushinlabHalfLogo}
                alt="logo"
              />
            </div>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                fontSize: '1.8rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                cursor: 'pointer',
                color: '#f1f3f5',
              }}
              onClick={() => navigate(nav_url)}
            >
              {textInputs.companyName}
            </Typography>
          </Toolbar>
          <Stack direction={'row'} alignItems="center" gap={2} sx={{ mr: 2 }}>
            <IconButton
              aria-label="show checklist notifications"
              color="inherit"
              onClick={(e) => {
                setAchorEl(e.currentTarget);
                setIsNotification(true);
              }}
            >
              <Badge badgeContent={messageLengthRef.current} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-label="help"
              color="inherit"
              onClick={(e) => {
                setAchorEl(e.currentTarget);
                setIsHelp(true);
              }}
            >
              <HelpIcon />
            </IconButton>
            <Typography variant="body1" sx={{ textTransform: 'uppercase' }}>
              {state.user?.name}
              {state.user?.name && '/'}
              {state.user?.userType === 2 ? 'ADMIN' : 'SUPERVISOR'}
            </Typography>
          </Stack>
        </Stack>
      </AppBar>
      <Drawer {...{ isDrawerOpen, setIsDrawerOpen }} />
      <Help {...{ isHelp, setIsHelp, anchorEl }} />
      <Notification
        {...{
          isNotification,
          setIsNotification,
          messages,
          removeMsg,
          removeCategory,
          anchorEl,
        }}
      />
    </Box>
  );
};

export default Navbar;
