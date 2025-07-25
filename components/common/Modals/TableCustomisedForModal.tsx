import React, { ReactNode } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import StateSearchBar from '../StateSearchBar';
import StateFilter from '../StateFilter';

interface Iprops {
  children: ReactNode;
  filterOptions: {
    name: string | number;
    value: string | number;
  }[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}
const TableCustomisedForModal = (prop: Iprops) => {
  const {
    children,
    filterOptions,
    search,
    setSearch,
    filter,
    setFilter,
    label,
  } = prop;
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '60vw',
          maxWidth: '65vw',
          margin: '0 10px 14px 10px',
        }}
      >
        <Grid xs={9}>
          <StateSearchBar {...{ search, setSearch, label }} />
        </Grid>
        <Grid xs={3}>
          <StateFilter options={filterOptions} {...{ setFilter, filter }} />
        </Grid>
      </Grid>
      {children}
    </>
  );
};
export default TableCustomisedForModal;
