import { ChangeEvent } from 'react';
import Styled from 'styled-components';
interface IProps {
  isView?: boolean;
  name?: string;
  label?: string;
  value?: number | string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  style?: any;
  disabled?: boolean;
  defaultValue?: string | number;
}
const StyledTextAreaInput = Styled.textarea`
    outline: none;
    width: 100%;
    border: none;
    height: 50px;
`;
const TextAreaInput = ({
  defaultValue,
  isView,
  name,
  value,
  disabled,
  label,
  onChange,
  style,
}: IProps) => {
  return (
    <div
      style={{
        border: isView ? 'none' : '1px solid #f9e0e0',
        padding: '0.1rem',
        display: isView ? 'inline-block' : 'block',
        textAlign: 'center',
      }}
    >
      {isView ? (
        value || defaultValue
      ) : (
        <StyledTextAreaInput
          placeholder={label}
          disabled={disabled}
          name={name}
          value={value || ''}
          autoComplete="off"
          style={style}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default TextAreaInput;
