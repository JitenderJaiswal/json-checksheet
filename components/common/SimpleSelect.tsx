import React from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 1.5rem;
  border: 2px solid #f3f1f1;
  border-radius: 1px;
  cursor: pointer;
  outline: none;
  appearance: none;
  width: 120px;
  background-color: #f9f9f9;
  color: #333;
  transition: border-color 0.3s ease;
  text-align: center;
  /* Style the dropdown arrow */
  &::-ms-expand {
    display: none;
  }
  &::after {
    content: '▼';
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 0.8rem;
    pointer-events: none;
  }
`;

const Option = styled.option`
  background-color: #f9f9f9;
  color: #333;
`;

const SimpleSelect = ({ name, value, onChange, options }: any) => {
  return (
    <SelectWrapper>
      <Select name={name} value={value} onChange={onChange}>
        {options?.map((option: any) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </SelectWrapper>
  );
};

export default SimpleSelect;
