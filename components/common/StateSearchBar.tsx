// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';

// interface IProps {
//   search: string;
//   setSearch: React.Dispatch<React.SetStateAction<string>>;
//   label:string;
// }

// const StateSearchBar = ({ label,search,setSearch }: IProps) => {
//   return (
//     <Paper
//       component="form"
//       sx={{
//         p: '9px 4px',
//         display: 'flex',
//         alignItems: 'center',
//         background: '#f1f3f5',
//       }}
//     >
//       <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
//         <SearchIcon sx={{ fontSize: '2.6rem' }} />
//       </IconButton>
//       <InputBase
//         sx={{ ml: 1, flex: 1, fontSize: '1.6rem' }}
//         placeholder={label}
//         onChange={(e) => setSearch(e.target.value)}
//         value={search}
//       />
//     </Paper>
//   );
// };

// export default StateSearchBar;

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface IProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  label: string;
}

const StateSearchBar = ({ label, search, setSearch }: IProps) => {
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
      }}
      onSubmit={handleFormSubmit} // Call the handleFormSubmit function when the form is submitted
    >
      <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
        <SearchIcon sx={{ fontSize: '2.6rem' }} />
      </IconButton>
      <InputBase
        autoFocus={true}
        sx={{ ml: 1, flex: 1, fontSize: '1.6rem' }}
        placeholder={label}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </Paper>
  );
};

export default StateSearchBar;
