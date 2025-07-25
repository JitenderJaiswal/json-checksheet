import React from 'react';
import { Grid, Box } from '@mui/material';
import styled from 'styled-components';
import { DynamicFields } from './DynamicFields';

// Define the structure of each field object
interface Field {
  gridStyle: any;
  type: 'label' | 'InputMuiCustom' | 'CheckBoxCustomMui' | 'DatePickerMui';
}

interface Iprops {
  cols: number;
  formFieldArr: Field[];
}

const GridContainer = styled(Grid)`
  margin: 0 auto;
  width: 98% !important;
  border-radius: 5px;
  overflow: hidden;
`;

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

const ResponsiveGridForm = ({ cols, formFieldArr }: Iprops) => {
  const renderFormField = (field: Field) => {
    const renderFunction = DynamicFields[field?.type];
    return renderFunction ? renderFunction(field) : null;
  };

  return (
    <Box sx={{ margin: '8px 2px' }}>
      <GridContainer container>
        {formFieldArr.map((field, index) => (
          <GridItem
            key={`${index}-grid-item`}
            item
            xs={12 / cols}
            sx={{ ...field?.gridStyle }}
          >
            {renderFormField(field)}
          </GridItem>
        ))}
      </GridContainer>
    </Box>
  );
};

export default ResponsiveGridForm;
