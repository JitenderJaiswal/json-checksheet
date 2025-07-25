import { Menu, MenuItem } from '@mui/material';

interface IProps {
  isHelp: boolean;
  setIsHelp: React.Dispatch<React.SetStateAction<boolean>>;
  // anchorEl: Element | ((element: Element) => Element) | null | undefined;
  anchorEl: any;
}
const Help = ({ isHelp, setIsHelp, anchorEl }: IProps) => {
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={isHelp}
      onClose={() => setIsHelp(false)}
    >
      <MenuItem>Contact Number: (+91) 97170 86212</MenuItem>
      <MenuItem>Email ID: rachit.srivastava@mushinlabs.com</MenuItem>
    </Menu>
  );
};

export default Help;
