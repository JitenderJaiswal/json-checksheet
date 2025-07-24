import { useState } from 'react';
import { TableInput } from '../../../../../components/common';
import { Checkbox } from '@mui/material';
import moment from 'moment';
import DatePickerMui from '../../../../../components/common/DatePickerMui';
import formatDate from '../../../../../components/common/formatDate';
import CustomTableInput from '../../../partSubmissionWarrant/components/view/CustomTableInput';

interface Ifoot {
  moduleData: any;
  isView: any;
}
const TBody1 = ({ moduleData, isView }: Ifoot) => {
  const [_, setRender] = useState(false);
  return (
    <tbody>
      <tr>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'center', paddingTop:'5px', paddingBottom:'5px'}}>
            1
          </div>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            {moduleData.q1}
          </div>
        </td>

        <td align='center' style={{ textAlign: 'left'}} colSpan={1}>
          <span>
            <Checkbox
            checked={moduleData.q1_option === 'YES'}
            onChange={() => {
              moduleData.q1_option = 'YES';
              setRender((prev) => !prev);
            }}
            disabled={isView}
            />
            YES
          </span>
          <span style={{marginLeft:'20px'}}>
            <Checkbox
              checked={moduleData.q1_option === 'NO'}
              onChange={() => {
                moduleData.q1_option = 'NO';
                setRender((prev) => !prev);
              }}
              disabled={isView}
            />
            NO
          </span>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q1_comment"
              type="text"

              value={moduleData.q1_comment}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q1_person"
              type="text"

              value={moduleData.q1_person}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        
        <td align="left" colSpan={1} style={{borderLeft:'none'}}>
          {isView ? (
            formatDate(moduleData.q1_due_date)
          ) : (
            <DatePickerMui
              label=""
              value={
                moduleData.q1_due_date ? moment(moduleData.q1_due_date) : null
              }
              onChange={(date: any) => {
                moduleData.q1_due_date = date;
                setRender((prev: any) => !prev);
              }}
            />
          )}
        </td>
        
      </tr>



      {/* SECOND ROW */}



      <tr>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'center', paddingTop:'5px', paddingBottom:'5px'}}>
            2
          </div>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            {moduleData.q2}
          </div>
        </td>

        <td align='center' style={{ textAlign: 'left'}} colSpan={1}>
          <span>
            <Checkbox
            checked={moduleData.q2_option === 'YES'}
            onChange={() => {
              moduleData.q2_option = 'YES';
              setRender((prev) => !prev);
            }}
            disabled={isView}
            />
            YES
          </span>
          <span style={{marginLeft:'20px'}}>
            <Checkbox
              checked={moduleData.q2_option === 'NO'}
              onChange={() => {
                moduleData.q2_option = 'NO';
                setRender((prev) => !prev);
              }}
              disabled={isView}
            />
            NO
          </span>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q2_comment"
              type="text"

              value={moduleData.q2_comment}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q2_person"
              type="text"

              value={moduleData.q2_person}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        
        <td align="left" colSpan={1} style={{borderLeft:'none'}}>
          {isView ? (
            formatDate(moduleData.q2_due_date)
          ) : (
            <DatePickerMui
              label=""
              value={
                moduleData.q2_due_date ? moment(moduleData.q2_due_date) : null
              }
              onChange={(date: any) => {
                moduleData.q2_due_date = date;
                setRender((prev: any) => !prev);
              }}
            />
          )}
        </td>
      </tr>


      {/* THIRD ROW */}



      <tr>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'center', paddingTop:'5px', paddingBottom:'5px'}}>
            3
          </div>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            {moduleData.q3}
          </div>
        </td>

        <td align='center' style={{ textAlign: 'left'}} colSpan={1}>
          <span>
            <Checkbox
            checked={moduleData.q3_option === 'YES'}
            onChange={() => {
              moduleData.q3_option = 'YES';
              setRender((prev) => !prev);
            }}
            disabled={isView}
            />
            YES
          </span>
          <span style={{marginLeft:'20px'}}>
            <Checkbox
              checked={moduleData.q3_option === 'NO'}
              onChange={() => {
                moduleData.q3_option = 'NO';
                setRender((prev) => !prev);
              }}
              disabled={isView}
            />
            NO
          </span>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q3_comment"
              type="text"

              value={moduleData.q3_comment}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q3_person"
              type="text"

              value={moduleData.q3_person}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        
        <td align="left" colSpan={1} style={{borderLeft:'none'}}>
          {isView ? (
            formatDate(moduleData.q3_due_date)
          ) : (
            <DatePickerMui
              label=""
              value={
                moduleData.q3_due_date ? moment(moduleData.q3_due_date) : null
              }
              onChange={(date: any) => {
                moduleData.q3_due_date = date;
                setRender((prev: any) => !prev);
              }}
            />
          )}
        </td>
      </tr>



      {/* FOUURTH ROW */}



      <tr>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'center', paddingTop:'5px', paddingBottom:'5px'}}>
            4
          </div>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            {moduleData.q4}
          </div>
        </td>

        <td align='center' style={{ textAlign: 'left'}} colSpan={1}>
          <span>
            <Checkbox
            checked={moduleData.q4_option === 'YES'}
            onChange={() => {
              moduleData.q4_option = 'YES';
              setRender((prev) => !prev);
            }}
            disabled={isView}
            />
            YES
          </span>
          <span style={{marginLeft:'20px'}}>
            <Checkbox
              checked={moduleData.q4_option === 'NO'}
              onChange={() => {
                moduleData.q4_option = 'NO';
                setRender((prev) => !prev);
              }}
              disabled={isView}
            />
            NO
          </span>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q4_comment"
              type="text"

              value={moduleData.q4_comment}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q4_person"
              type="text"

              value={moduleData.q4_person}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        
        <td align="left" colSpan={1} style={{borderLeft:'none'}}>
          {isView ? (
            formatDate(moduleData.q4_due_date)
          ) : (
            <DatePickerMui
              label=""
              value={
                moduleData.q4_due_date ? moment(moduleData.q4_due_date) : null
              }
              onChange={(date: any) => {
                moduleData.q4_due_date = date;
                setRender((prev: any) => !prev);
              }}
            />
          )}
        </td>
      </tr>



      {/* FIFTH ROW */}



      <tr>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'center', paddingTop:'5px', paddingBottom:'5px'}}>
            5
          </div>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            {moduleData.q5}
          </div>
        </td>

        <td align='center' style={{ textAlign: 'left'}} colSpan={1}>
          <span>
            <Checkbox
            checked={moduleData.q5_option === 'YES'}
            onChange={() => {
              moduleData.q5_option = 'YES';
              setRender((prev) => !prev);
            }}
            disabled={isView}
            />
            YES
          </span>
          <span style={{marginLeft:'20px'}}>
            <Checkbox
              checked={moduleData.q5_option === 'NO'}
              onChange={() => {
                moduleData.q5_option = 'NO';
                setRender((prev) => !prev);
              }}
              disabled={isView}
            />
            NO
          </span>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q5_comment"
              type="text"

              value={moduleData.q5_comment}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q5_person"
              type="text"

              value={moduleData.q5_person}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        
        <td align="left" colSpan={1} style={{borderLeft:'none'}}>
          {isView ? (
            formatDate(moduleData.q5_due_date)
          ) : (
            <DatePickerMui
              label=""
              value={
                moduleData.q5_due_date ? moment(moduleData.q5_due_date) : null
              }
              onChange={(date: any) => {
                moduleData.q5_due_date = date;
                setRender((prev: any) => !prev);
              }}
            />
          )}
        </td>
      </tr>

      {/* SIXTH ROW */}



      <tr>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'center', paddingTop:'5px', paddingBottom:'5px'}}>
            6
          </div>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            {moduleData.q6}
          </div>
        </td>

        <td align='center' style={{ textAlign: 'left'}} colSpan={1}>
          <span>
            <Checkbox
            checked={moduleData.q6_option === 'YES'}
            onChange={() => {
              moduleData.q6_option = 'YES';
              setRender((prev) => !prev);
            }}
            disabled={isView}
            />
            YES
          </span>
          <span style={{marginLeft:'20px'}}>
            <Checkbox
              checked={moduleData.q6_option === 'NO'}
              onChange={() => {
                moduleData.q6_option = 'NO';
                setRender((prev) => !prev);
              }}
              disabled={isView}
            />
            NO
          </span>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q6_comment"
              type="text"

              value={moduleData.q6_comment}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q6_person"
              type="text"

              value={moduleData.q6_person}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        
        <td align="left" colSpan={1} style={{borderLeft:'none'}}>
          {isView ? (
            formatDate(moduleData.q6_due_date)
          ) : (
            <DatePickerMui
              label=""
              value={
                moduleData.q6_due_date ? moment(moduleData.q6_due_date) : null
              }
              onChange={(date: any) => {
                moduleData.q6_due_date = date;
                setRender((prev: any) => !prev);
              }}
            />
          )}
        </td>
      </tr>


      {/* SEVENTH ROW */}



      <tr>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'center', paddingTop:'5px', paddingBottom:'5px'}}>
            7
          </div>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            {moduleData.q7}
          </div>
        </td>

        <td align='center' style={{ textAlign: 'left'}} colSpan={1}>
          <span>
            <Checkbox
            checked={moduleData.q7_option === 'YES'}
            onChange={() => {
              moduleData.q7_option = 'YES';
              setRender((prev) => !prev);
            }}
            disabled={isView}
            />
            YES
          </span>
          <span style={{marginLeft:'20px'}}>
            <Checkbox
              checked={moduleData.q7_option === 'NO'}
              onChange={() => {
                moduleData.q7_option = 'NO';
                setRender((prev) => !prev);
              }}
              disabled={isView}
            />
            NO
          </span>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q7_comment"
              type="text"

              value={moduleData.q7_comment}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q7_person"
              type="text"

              value={moduleData.q7_person}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        
        <td align="left" colSpan={1} style={{borderLeft:'none'}}>
          {isView ? (
            formatDate(moduleData.q7_due_date)
          ) : (
            <DatePickerMui
              label=""
              value={
                moduleData.q7_due_date ? moment(moduleData.q7_due_date) : null
              }
              onChange={(date: any) => {
                moduleData.q7_due_date = date;
                setRender((prev: any) => !prev);
              }}
            />
          )}
        </td>
      </tr>





      {/* EIGTHTH ROW */}



      <tr>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'center', paddingTop:'5px', paddingBottom:'5px'}}>
            8
          </div>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            {moduleData.q8}
          </div>
        </td>

        <td align='center' style={{ textAlign: 'left'}} colSpan={1}>
          <span>
            <Checkbox
            checked={moduleData.q8_option === 'YES'}
            onChange={() => {
              moduleData.q8_option = 'YES';
              setRender((prev) => !prev);
            }}
            disabled={isView}
            />
            YES
          </span>
          <span style={{marginLeft:'20px'}}>
            <Checkbox
              checked={moduleData.q8_option === 'NO'}
              onChange={() => {
                moduleData.q8_option = 'NO';
                setRender((prev) => !prev);
              }}
              disabled={isView}
            />
            NO
          </span>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q8_comment"
              type="text"

              value={moduleData.q8_comment}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q8_person"
              type="text"

              value={moduleData.q8_person}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        
        <td align="left" colSpan={1} style={{borderLeft:'none'}}>
          {isView ? (
            formatDate(moduleData.q8_due_date)
          ) : (
            <DatePickerMui
              label=""
              value={
                moduleData.q8_due_date ? moment(moduleData.q8_due_date) : null
              }
              onChange={(date: any) => {
                moduleData.q8_due_date = date;
                setRender((prev: any) => !prev);
              }}
            />
          )}
        </td>
      </tr>



      {/* NINTH ROW */}



      <tr>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'center', paddingTop:'5px', paddingBottom:'5px'}}>
            9
          </div>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            {moduleData.q9}
          </div>
        </td>

        <td align='center' style={{ textAlign: 'left'}} colSpan={1}>
          <span>
            <Checkbox
            checked={moduleData.q9_option === 'YES'}
            onChange={() => {
              moduleData.q9_option = 'YES';
              setRender((prev) => !prev);
            }}
            disabled={isView}
            />
            YES
          </span>
          <span style={{marginLeft:'20px'}}>
            <Checkbox
              checked={moduleData.q9_option === 'NO'}
              onChange={() => {
                moduleData.q9_option = 'NO';
                setRender((prev) => !prev);
              }}
              disabled={isView}
            />
            NO
          </span>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q9_comment"
              type="text"

              value={moduleData.q9_comment}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q9_person"
              type="text"

              value={moduleData.q9_person}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        
        <td align="left" colSpan={1} style={{borderLeft:'none'}}>
          {isView ? (
            formatDate(moduleData.q9_due_date)
          ) : (
            <DatePickerMui
              label=""
              value={
                moduleData.q9_due_date ? moment(moduleData.q9_due_date) : null
              }
              onChange={(date: any) => {
                moduleData.q9_due_date = date;
                setRender((prev: any) => !prev);
              }}
            />
          )}
        </td>
      </tr>



      {/* THENTH ROW */}



      <tr>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'center', paddingTop:'5px', paddingBottom:'5px'}}>
            10
          </div>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            {moduleData.q10}
          </div>
        </td>

        <td align='center' style={{ textAlign: 'left'}} colSpan={1}>
          <span>
            <Checkbox
            checked={moduleData.q10_option === 'YES'}
            onChange={() => {
              moduleData.q10_option = 'YES';
              setRender((prev) => !prev);
            }}
            disabled={isView}
            />
            YES
          </span>
          <span style={{marginLeft:'20px'}}>
            <Checkbox
              checked={moduleData.q10_option === 'NO'}
              onChange={() => {
                moduleData.q10_option = 'NO';
                setRender((prev) => !prev);
              }}
              disabled={isView}
            />
            NO
          </span>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q10_comment"
              type="text"

              value={moduleData.q10_comment}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q10_person"
              type="text"

              value={moduleData.q10_person}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        
        <td align="left" colSpan={1} style={{borderLeft:'none'}}>
          {isView ? (
            formatDate(moduleData.q10_due_date)
          ) : (
            <DatePickerMui
              label=""
              value={
                moduleData.q10_due_date ? moment(moduleData.q10_due_date) : null
              }
              onChange={(date: any) => {
                moduleData.q10_due_date = date;
                setRender((prev: any) => !prev);
              }}
            />
          )}
        </td>
      </tr>



      {/* ELEVENTH ROW */}



      <tr>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'center', paddingTop:'5px', paddingBottom:'5px'}}>
            11
          </div>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            {moduleData.q11}
          </div>
        </td>

        <td align='center' style={{ textAlign: 'left'}} colSpan={1}>
          <span>
            <Checkbox
            checked={moduleData.q11_option === 'YES'}
            onChange={() => {
              moduleData.q11_option = 'YES';
              setRender((prev) => !prev);
            }}
            disabled={isView}
            />
            YES
          </span>
          <span style={{marginLeft:'20px'}}>
            <Checkbox
              checked={moduleData.q11_option === 'NO'}
              onChange={() => {
                moduleData.q11_option = 'NO';
                setRender((prev) => !prev);
              }}
              disabled={isView}
            />
            NO
          </span>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q11_comment"
              type="text"

              value={moduleData.q11_comment}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q11_person"
              type="text"

              value={moduleData.q11_person}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        
        <td align="left" colSpan={1} style={{borderLeft:'none'}}>
          {isView ? (
            formatDate(moduleData.q11_due_date)
          ) : (
            <DatePickerMui
              label=""
              value={
                moduleData.q11_due_date ? moment(moduleData.q11_due_date) : null
              }
              onChange={(date: any) => {
                moduleData.q11_due_date = date;
                setRender((prev: any) => !prev);
              }}
            />
          )}
        </td>
      </tr>





      {/* TWELFTH ROW */}



      <tr>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'center', paddingTop:'5px', paddingBottom:'5px'}}>
            12
          </div>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            {moduleData.q12}
          </div>
        </td>

        <td align='center' style={{ textAlign: 'left'}} colSpan={1}>
          <span>
            <Checkbox
            checked={moduleData.q12_option === 'YES'}
            onChange={() => {
              moduleData.q12_option = 'YES';
              setRender((prev) => !prev);
            }}
            disabled={isView}
            />
            YES
          </span>
          <span style={{marginLeft:'20px'}}>
            <Checkbox
              checked={moduleData.q12_option === 'NO'}
              onChange={() => {
                moduleData.q12_option = 'NO';
                setRender((prev) => !prev);
              }}
              disabled={isView}
            />
            NO
          </span>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q12_comment"
              type="text"

              value={moduleData.q12_comment}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q12_person"
              type="text"

              value={moduleData.q12_person}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        
        <td align="left" colSpan={1} style={{borderLeft:'none'}}>
          {isView ? (
            formatDate(moduleData.q12_due_date)
          ) : (
            <DatePickerMui
              label=""
              value={
                moduleData.q12_due_date ? moment(moduleData.q12_due_date) : null
              }
              onChange={(date: any) => {
                moduleData.q12_due_date = date;
                setRender((prev: any) => !prev);
              }}
            />
          )}
        </td>

      </tr>



      {/* THRITEENTH ROW */}



      <tr>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'center', paddingTop:'5px', paddingBottom:'5px'}}>
            13
          </div>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            {moduleData.q13}
          </div>
        </td>

        <td align='center' style={{ textAlign: 'left'}} colSpan={1}>
          <span>
            <Checkbox
            checked={moduleData.q13_option === 'YES'}
            onChange={() => {
              moduleData.q13_option = 'YES';
              setRender((prev) => !prev);
            }}
            disabled={isView}
            />
            YES
          </span>
          <span style={{marginLeft:'20px'}}>
            <Checkbox
              checked={moduleData.q13_option === 'NO'}
              onChange={() => {
                moduleData.q13_option = 'NO';
                setRender((prev) => !prev);
              }}
              disabled={isView}
            />
            NO
          </span>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q13_comment"
              type="text"

              value={moduleData.q13_comment}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q13_person"
              type="text"

              value={moduleData.q13_person}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        
        <td align="left" colSpan={1} style={{borderLeft:'none'}}>
          {isView ? (
            formatDate(moduleData.q13_due_date)
          ) : (
            <DatePickerMui
              label=""
              value={
                moduleData.q13_due_date ? moment(moduleData.q13_due_date) : null
              }
              onChange={(date: any) => {
                moduleData.q13_due_date = date;
                setRender((prev: any) => !prev);
              }}
            />
          )}
        </td>
      </tr>



      {/* FOURTEENTH ROW */}



      <tr>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'center', paddingTop:'5px', paddingBottom:'5px'}}>
            14
          </div>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            {moduleData.q14}
          </div>
        </td>

        <td align='center' style={{ textAlign: 'left'}} colSpan={1}>
          <span>
            <Checkbox
            checked={moduleData.q14_option === 'YES'}
            onChange={() => {
              moduleData.q14_option = 'YES';
              setRender((prev) => !prev);
            }}
            disabled={isView}
            />
            YES
          </span>
          <span style={{marginLeft:'20px'}}>
            <Checkbox
              checked={moduleData.q14_option === 'NO'}
              onChange={() => {
                moduleData.q14_option = 'NO';
                setRender((prev) => !prev);
              }}
              disabled={isView}
            />
            NO
          </span>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q14_comment"
              type="text"

              value={moduleData.q14_comment}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q14_person"
              type="text"

              value={moduleData.q14_person}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        
        <td align="left" colSpan={1} style={{borderLeft:'none'}}>
          {isView ? (
            formatDate(moduleData.q14_due_date)
          ) : (
            <DatePickerMui
              label=""
              value={
                moduleData.q14_due_date ? moment(moduleData.q14_due_date) : null
              }
              onChange={(date: any) => {
                moduleData.q14_due_date = date;
                setRender((prev: any) => !prev);
              }}
            />
          )}
        </td>
      </tr>



      {/* FIFTEENTH ROW */}



      <tr>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'center', paddingTop:'5px', paddingBottom:'5px'}}>
            15
          </div>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            {moduleData.q15}
          </div>
        </td>

        <td align='center' style={{ textAlign: 'left'}} colSpan={1}>
          <span>
            <Checkbox
            checked={moduleData.q15_option === 'YES'}
            onChange={() => {
              moduleData.q15_option = 'YES';
              setRender((prev) => !prev);
            }}
            disabled={isView}
            />
            YES
          </span>
          <span style={{marginLeft:'20px'}}>
            <Checkbox
              checked={moduleData.q15_option === 'NO'}
              onChange={() => {
                moduleData.q15_option = 'NO';
                setRender((prev) => !prev);
              }}
              disabled={isView}
            />
            NO
          </span>
        </td>
        <td colSpan={2}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q15_comment"
              type="text"

              value={moduleData.q15_comment}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        <td colSpan={1}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="q15_person"
              type="text"

              value={moduleData.q15_person}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        
        <td align="left" colSpan={1} style={{borderLeft:'none'}}>
          {isView ? (
            formatDate(moduleData.q15_due_date)
          ) : (
            <DatePickerMui
              label=""
              value={
                moduleData.q15_due_date ? moment(moduleData.q15_due_date) : null
              }
              onChange={(date: any) => {
                moduleData.q15_due_date = date;
                setRender((prev: any) => !prev);
              }}
            />
          )}
        </td>
      </tr>

      <tr>
        <th colSpan={1}>
          <div style={{ textAlign:'center', paddingTop:'5px', paddingBottom:'5px'}}>
            REMARK:
          </div>
        </th>
        <td colSpan={7}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px', marginRight:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="remark"
              type="text"

              value={moduleData.remark}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>

        </td>
      </tr>


      <tr>
        <th colSpan={1}>
          <div style={{ textAlign:'center', paddingTop:'5px', paddingBottom:'5px'}}>
            PREPARED BY:
          </div>
        </th>
        <td colSpan={3}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px', marginRight:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="prepared_by"
              type="text"

              value={moduleData.prepared_by}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
        <th colSpan={1}>
          <div style={{ textAlign:'center', paddingTop:'5px', paddingBottom:'5px'}}>
            APPROVED BY:
          </div>
        </th>
        <td colSpan={3}>
          <div style={{marginLeft:'5px', textAlign:'left', paddingTop:'5px', paddingBottom:'5px', marginRight:'5px'}}>
            <CustomTableInput
              isView={isView}
              name="approved_by"
              type="text"

              value={moduleData.approved_by}
              onChange={(e) => {
                moduleData[e.target.name] = e.target.value;
                setRender((prev: any) => !prev);
              }}
            />
          </div>
        </td>
      </tr>




    </tbody>
  );
};

export default TBody1;
