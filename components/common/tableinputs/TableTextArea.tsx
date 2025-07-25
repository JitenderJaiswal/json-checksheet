import React, { WheelEvent } from 'react';
import Styled from 'styled-components';

interface IProps {
  isView: boolean;
  name?: string;
  value?: number | string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
  disabled?: boolean;
  min?: number;
  rowSpan?: number;
  max?: number;
  defaultValue?: string | number;
  resize?: string; // New prop to control vertical resizing
}

const calculateCellHeight = (rowSpan: number) => {
  const baseHeight = 50;
  return Number(rowSpan) * baseHeight;
};

const TextArea = Styled.textarea<{ resize?: string }>`
    outline: none;
    width: 100%; // Ensures the textarea takes the full width of the container
    border: none;
    border-radius: 4px;
    padding: 8px;
    min-height: 50px;
    height: auto;
    overflow: auto; 
    white-space: pre-wrap;
    resize: ${(props) =>
      props.resize || 'both'};  // Conditionally allow vertical resizing
    &::-webkit-scrollbar {
        width: 10px; 
    }
    &::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    &::-webkit-scrollbar-thumb {
        background: #888; 
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
`;

const TableTextArea = ({
  defaultValue,
  isView,
  name,
  value,
  type,
  onChange,
  style,
  min,
  max,
  rowSpan,
  resize, // Default to no resizing if not specified
  ...rest
}: IProps) => {
  const handleWheel = (event: WheelEvent<HTMLTextAreaElement>) => {
    event.currentTarget.blur();
  };

  return (
    <div
      style={{
        border: isView ? 'none' : '2px solid #d3f9d8',
        padding: '0.1rem',
        display: isView ? 'inline-block' : 'block',
        textAlign: 'center',
        width: style?.width, // Ensure the width is set on the container div
        minWidth: style?.minWidth, // Ensure the minWidth is set on the container div
      }}
    >
      {isView ? (
        <span
          style={{
            padding: '0.1rem',
            display: 'inline-block',
            textAlign: 'center',
          }}
        >
          {value ?? defaultValue}
        </span>
      ) : (
        <TextArea
          name={name}
          value={value ?? defaultValue}
          autoComplete="off"
          style={{
            ...style,
            height: calculateCellHeight(rowSpan || 1) + 'px',
          }}
          onChange={onChange}
          onWheel={handleWheel}
          resize={resize} // Pass the resize prop
          {...rest}
        />
      )}
    </div>
  );
};

export default TableTextArea;
