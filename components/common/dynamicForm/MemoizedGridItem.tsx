import React, { memo, useMemo } from 'react';
import { Grid, Box } from '@mui/material';
import styled from 'styled-components';
import { DynamicFields } from './DynamicFields';

const GridItem = styled(Grid)`
  display: flex;
  align-items: center;
  border: 1px solid #dee2e6;
  &:first-of-type {
    border-left: 1px solid #dee2e6;
  }
  &:last-of-type {
    border-right: 1px solid #dee2e6;
  }
  &:nth-of-type(odd) {
    background-color: #f7f7f7;
  }
`;

const MemoizedGridItem = memo(({ field, cols }: any) => {
  const memoizedField = useMemo(() => {
    const renderFunction = DynamicFields[field?.type];
    return renderFunction ? renderFunction(field) : null;
  }, [field, DynamicFields]);

  return (
    <GridItem item xs={12 / cols} sx={{ ...field?.gridStyle }}>
      {memoizedField}
    </GridItem>
  );
});

export default MemoizedGridItem;
