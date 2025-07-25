import React, { ChangeEvent, WheelEvent } from 'react';
import Styled from 'styled-components';
interface IProps {
  isView: boolean;
  name?: string;
  TableInputType?: 'Input' | 'textarea';
  value?: number | string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: any;
  disabled?: boolean;
  min?: number;
  rowSpan?: number;
  max?: number;
  defaultValue?: string | number;
}
const Input = Styled.input`
    outline: none;
    width: 100%;
    border: none;
    min-height: 50px;
    height: 100%;
`;

const calculateCellHeight = (rowSpan: number) => {
  //  base height of 50px per row
  const baseHeight = 50;
  return Number(rowSpan) * baseHeight;
};

const TableInput = ({
  defaultValue,
  TableInputType,
  isView,
  name,
  value,
  type,
  onChange,
  style,
  min,
  max,
  rowSpan,
  ...rest
}: IProps) => {
  const handleWheel = (event: WheelEvent<HTMLInputElement>) => {
    event.currentTarget.blur();
  };

  return (
    <div
      style={{
        border: isView ? 'none' : '2px solid #d3f9d8',
        padding: '0.1rem',
        display: isView ? 'inline-block' : 'block',
        textAlign: 'center',
      }}
    >
      {isView ? (
        <span
          style={{
            padding: '0.1rem',
            display: isView ? 'inline-block' : 'block',
            textAlign: 'center',
          }}
        >
          {value || value === 0
            ? value
            : defaultValue || defaultValue === 0
            ? defaultValue
            : ''}
        </span>
      ) : (
        <Input
          type={type}
          name={name}
          value={
            value !== undefined && value !== null
              ? value
              : value === 0
              ? '0'
              : ''
          }
          autoComplete="off"
          style={{ ...style, height: calculateCellHeight(rowSpan || 1) + 'px' }}
          defaultValue={
            defaultValue !== undefined && defaultValue !== null
              ? defaultValue
              : defaultValue === 0
              ? '0'
              : ''
          }
          onChange={onChange}
          onWheel={handleWheel}
          min={min}
          max={max}
          {...rest}
        />
      )}
    </div>
  );
};

export default TableInput;
