import moment from 'moment';
import TableCompHead from '../../../../../components/ui/TableCompHead';
import DatePickerMui from '../../../../../components/common/DatePickerMui';
import formatDate from '../../../../../components/common/formatDate';
import { moduleConstant } from '../../constant';
import { TableInput } from '../../../../../components/common';
import { Checkbox, Grid } from '@mui/material';
import {
  AddIconButton,
  RemoveIconButton,
} from '../../../../../components/common/button/CustomIconButton';
import { useState } from 'react';

interface IProps {
  moduleData: any;
  isView: boolean;
  setIsOpenPopup?: any;
}

const THead = ({ moduleData, isView, setIsOpenPopup }: IProps) => {
  const [_, setRender] = useState(false);
  return (
    <thead>
      <TableCompHead
        colSpan={8}
        rowSpan={1}
        labels={[]}
        values={[]}
        heading={moduleConstant.heading}
      />
      <tr>
        <th colSpan={1} align="left">
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'10px', paddingBottom:'10px'}}>
            PART NAME :
          </div>
        </th>
        <th colSpan={3} align="left">
          {isView ? (
            <div style={{marginLeft:'5px', textAlign:'left'}}>
              {moduleData?.part_id && moduleData?.part_id?.part_name}
            </div>
          ) : (
            <div >
              <Grid
              container
              xs={12}
              direction="row"
              alignItems={'center'}
              sx={{ background: '#f8f9fa' }}
            >
              <Grid item xs={10}>
                <p
                  style={{
                    fontSize: '1.2rem',
                    marginLeft:'5px'
                  }}
                >
                  {typeof moduleData?.part_id === 'object' &&
                    moduleData?.part_id !== null &&
                    moduleData?.part_id?.part_name}
                </p>
              </Grid>

              {moduleData.part_id ? (
                <Grid item xs={2}>
                  <RemoveIconButton
                    tooltipTitle="remove part"
                    onClick={() => {
                      moduleData.part_id = null;
                      setRender((prev: any) => !prev);
                    }}
                  />
                </Grid>
              ) : (
                <Grid item xs={2}>
                  <AddIconButton
                    tooltipTitle="add part"
                    onClick={() => {
                      setIsOpenPopup(true);
                    }}
                  />
                </Grid>
              )}
            </Grid>
            </div>
            
          )}
        </th>
        <th colSpan={1} align="left">
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'10px', paddingBottom:'10px'}}>
            CUSTOMER :
          </div>
          
        </th>
        <th colSpan={3} align="left">
          <div style={{marginLeft:'5px', textAlign:'left'}}>
            {moduleData?.part_id?.customer_id?.customer_name}
          </div>
        </th>
      </tr>


      <tr>
        <th colSpan={1} align="left">
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'10px', paddingBottom:'10px'}}>
            PART NO. :
          </div>
        </th>
        <th colSpan={3} align="left">
          <div style={{marginLeft:'5px', textAlign:'left'}}>
            {moduleData?.part_id?.part_number}
          </div>
        </th>
        <th colSpan={1} align="left">
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'10px', paddingBottom:'10px'}}>
            MODEL :
          </div>
        </th>
        <th colSpan={3} align="left">
          <div style={{marginLeft:'5px', textAlign:'left'}}>
            {moduleData?.part_id?.model_id?.model_name}
          </div>
        </th>
      </tr>

      <tr>
        <th colSpan={3} >
          <div style={{ textAlign:'center', paddingTop:'15px', paddingBottom:'15px', borderBottom:'none'}}>
            QUESTION
          </div>
        </th>
        <th colSpan={1} >
          <div style={{textAlign:'center', paddingTop:'15px', paddingBottom:'15px', borderBottom:'none'}}>
            YES/NO
          </div>
        </th>
        <th colSpan={2} >
          <div style={{ textAlign:'center', paddingTop:'15px', paddingBottom:'15px', borderBottom:'none'}}>
            COMMENT/ACTION REQUIRED
          </div>
        </th>
        <th colSpan={1} >
          <div style={{ textAlign:'center', paddingTop:'15px', paddingBottom:'15px', borderBottom:'none'}}>
            PERSON RESPONSIBLE
          </div>
        </th>
        <th colSpan={1} >
          <div style={{ textAlign:'center', paddingTop:'15px', paddingBottom:'15px', borderBottom:'none'}}>
            DUE DATE
          </div>
        </th>
      </tr>

      <tr>
        <th colSpan={1} style={{width:'100px', padding:'0px', margin:'0px', border:'none', height:'0px'}}>

        </th>
        <th colSpan={1} style={{width:'250px', padding:'0px', margin:'0px', border:'none', height:'0px'}}>

        </th>
        <th colSpan={1} style={{width:'300px', padding:'0px', margin:'0px', border:'none', height:'0px'}}>

        </th>
        <th colSpan={1} style={{width:'200px', padding:'0px', margin:'0px', border:'none', height:'0px'}}>

        </th>
        <th colSpan={1} style={{width:'100px', padding:'0px', margin:'0px', border:'none', height:'0px'}}>

        </th>
        <th colSpan={1} style={{width:'250px', padding:'0px', margin:'0px', border:'none', height:'0px'}}>

        </th>
        <th colSpan={1} style={{width:'250px', padding:'0px', margin:'0px', border:'none', height:'0px'}}>

        </th>
        <th colSpan={1} style={{width:'250px', padding:'0px', margin:'0px', border:'none', height:'0px'}}>

        </th>

      </tr>





      
    </thead>
  );
};

export default THead;
