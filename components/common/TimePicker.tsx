const TimePicker = ({
  label,
  onChange,
  value,
}: {
  label?: string;
  onChange: (date?: any) => void;
  value: string | null | object;
}) => {
  return (
    <TimePicker
      label={label || ''}
      onChange={(e: any) => onChange(e)}
      value={value}
    />
  );
};

export default TimePicker;
