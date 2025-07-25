import { AccountCircle, ExitToApp, Home } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../services/auth/AuthProvider';
import useConfirm from '../../common/useConfirm';

const MenuList = ({
  setIsDrawerOpen,
}: {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { state, logout } = useAuth();

  const { user } = state;
  const location = useLocation();
  const navigate = useNavigate();
  const [DialogLogout, confirmLogout] = useConfirm(
    'LOGOUT',
    `Are you sure you want to logout`
  );
  const logOutUser = async () => {
    const ans = await confirmLogout();
    if (!ans) return;
    logout();
    location.state = null;
    navigate('/');
  };
  const goToHome = () => {
    if (state.user) {
      if (state.user.userType === 2) {
        navigate('/admin/home');
      }
      if (state.user.userType === 3) {
        navigate('/supervisor/home');
      }
    }
  };

  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setIsDrawerOpen(false)}
      onKeyDown={() => setIsDrawerOpen(false)}
    >
      <Box
        sx={{
          margin: '2rem 3rem 2rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Avatar
          src={state.user?.profile as string}
          className="avatar"
          style={{ height: '170px', width: '170px' }}
        />
      </Box>
      <List>
        <ListItem disablePadding onClick={goToHome}>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() =>
            navigate(
              `${user?.userType === 2 ? '/admin' : '/supervisor'}/profile`
            )
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() =>
            navigate(
              `${user?.userType === 2 ? '/admin' : '/supervisor'}/usermanagement`
            )
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="User Management" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={logOutUser}>
          <ListItemButton>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <DialogLogout />
    </Box>
  );
};

interface IProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Drawer = ({ isDrawerOpen, setIsDrawerOpen }: IProps) => {
  return (
    <>
      <SwipeableDrawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpen={() => setIsDrawerOpen(true)}
      >
        <MenuList {...{ setIsDrawerOpen }} />
      </SwipeableDrawer>
    </>
  );
};

export default Drawer;
