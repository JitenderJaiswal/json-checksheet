// import React, { useMemo } from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete, {
//   AutocompleteRenderInputParams,
// } from '@mui/material/Autocomplete';

// interface OptionType {
//   [key: string]: any;
// }

// interface AutocompleteMuiCustomProps {
//   id: string;
//   option_name: string;
//   onChange: (
//     event: React.SyntheticEvent<Element, Event>,
//     newValue: OptionType | null,
//   ) => void;
//   value: OptionType | null;
//   arrayofObj: OptionType[];
//   label?: string;
//   sx?: React.CSSProperties;
// }

// const AutocompleteMuiCustom: React.FC<AutocompleteMuiCustomProps> = React.memo(
//   ({ id, label, option_name, onChange, value, arrayofObj, sx, ...rest }) => {
//     const properties = useMemo(() => option_name.split('.'), [option_name]);

//     const getOptionLabel = (option: OptionType): string => {
//       if (!option) return '';

//       // Drill down through the object based on properties
//       let labelValue: any = option;
//       for (const prop of properties) {
//         if (labelValue[prop]) {
//           labelValue = labelValue[prop];
//         } else {
//           return ''; // Return empty string if the property path is broken
//         }
//       }
//       return labelValue.toString(); // Convert the final value to string
//     };

//     const isOptionEqualToValue = (
//       option: OptionType,
//       value: OptionType,
//     ): boolean => {
//       let optionValue: any = option;
//       let valueSelected: any = value;
//       for (const prop of properties) {
//         optionValue = optionValue[prop];
//         valueSelected = valueSelected[prop];
//       }
//       return optionValue === valueSelected;
//     };

//     return (
//       <Autocomplete
//         id={id}
//         options={arrayofObj}
//         getOptionLabel={getOptionLabel}
//         isOptionEqualToValue={isOptionEqualToValue}
//         value={value}
//         onChange={onChange}
//         renderInput={(params: AutocompleteRenderInputParams) => (
//           <TextField
//             {...params}
//             label={label}
//             sx={sx}
//             InputProps={{
//               ...params.InputProps,
//               disableUnderline: true,
//             }}
//             {...rest}
//           />
//         )}
//         sx={{ ...sx }}
//       />
//     );
//   },
// );

// export default AutocompleteMuiCustom;
// // 


import React, { useMemo } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, {
  AutocompleteRenderInputParams,
} from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';

interface OptionType {
  [key: string]: any;
}

interface AutocompleteMuiCustomProps {
  id: string;
  option_name: string;
  onChange: (
    event: React.SyntheticEvent<Element, Event>,
    newValue: OptionType | null,
  ) => void;
  value: OptionType | null;
  arrayofObj: OptionType[];
  label?: string;
  sx?: React.CSSProperties;
}

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    whiteSpace: 'normal', // Allow text to wrap
    overflowWrap: 'break-word', // Break long words
    display: 'block', // Ensure text wraps inside the input
    height: 'auto', // Allow height to adjust based on content
    padding: '10px', // Adjust padding for better visibility
  },
}));

const AutocompleteMuiCustom: React.FC<AutocompleteMuiCustomProps> = React.memo(
  ({ id, label, option_name, onChange, value, arrayofObj, sx, ...rest }) => {
    const properties = useMemo(() => option_name.split('.'), [option_name]);

    const getOptionLabel = (option: OptionType): string => {
      if (!option) return '';

     
      let labelValue: any = option;
      for (const prop of properties) {
        if (labelValue[prop]) {
          labelValue = labelValue[prop];
        } else {
          return ''; 
        }
      }
      return labelValue.toString(); 
    };

    const isOptionEqualToValue = (
      option: OptionType,
      value: OptionType,
    ): boolean => {
      let optionValue: any = option;
      let valueSelected: any = value;
      for (const prop of properties) {
        optionValue = optionValue[prop];
        valueSelected = valueSelected[prop];
      }
      return optionValue === valueSelected;
    };

    return (
      <Autocomplete
        id={id}
        options={arrayofObj}
        getOptionLabel={getOptionLabel}
        isOptionEqualToValue={isOptionEqualToValue}
        value={value}
        onChange={onChange}
        renderInput={(params: AutocompleteRenderInputParams) => (
          <CustomTextField
            {...params}
            label={label}
            multiline
            sx={{
              ...sx,
              '& .MuiInputBase-root': {
                alignItems: 'flex-start', 
              },
            }}
            {...rest}
          />
        )}
        sx={{ ...sx }}
      />
    );
  },
);

export default AutocompleteMuiCustom;
