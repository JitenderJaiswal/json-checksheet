import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { CustomButton } from './CustomButtons';

interface Iprops {
  lable?: String;
  onChange: (e: any) => void;
  accept?: string;
  multiple?: boolean;
  id?: string;
}
const CustomUploadButton = (props: Iprops) => {
  const { onChange, lable, accept, multiple, id } = props;
  return (
    <>
      <div>
        <input
          id={id ? id : 'contained-button-file'}
          type="file"
          name={'excelFile'}
          multiple={multiple}
          accept={
            accept
              ? accept
              : '.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
          }
          onChange={onChange}
          hidden
        />
        <label htmlFor={id ? id : 'contained-button-file'}>
          <CustomButton
            color="primary"
            sx={{ margin: '10px', backgroundColor: '#fff', color: '#111' }}
            icon={<AiOutlineCloudUpload />}
            disabled={false}
            size="large"
            component="span"
          >
            {lable}
          </CustomButton>
        </label>
      </div>
    </>
  );
};

export default CustomUploadButton;
