import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '../../hooks/UseQuery';
import queryString from 'query-string';

interface Iprop {
  label: string;
  sx?: any;
}

export const SearchBar = ({ label, sx }: Iprop) => {
  const location = useLocation();
  const navigate = useNavigate();
  const search = useQuery('search');

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const parsedQuery = queryString.parse(location.search);
    parsedQuery.search = e.target.value;
    const query = queryString.stringify(parsedQuery);
    navigate(`${location.pathname}?${query}`);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
  };

  return (
    <Paper
      component="form"
      sx={{
        p: '9px 4px',
        display: 'flex',
        alignItems: 'center',
        background: '#f1f3f5',
        ...sx,
      }}
      onSubmit={handleFormSubmit}
    >
      <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
        <SearchIcon sx={{ fontSize: '2.6rem' }} />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: '1.6rem' }}
        placeholder={label}
        onChange={(event) => handleChange(event)}
        value={search}
      />
    </Paper>
  );
};
