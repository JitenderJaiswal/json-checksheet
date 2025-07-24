import React, { useEffect, useState } from 'react';
import lodash from 'lodash';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box/Box';
import ChildHeader from '../../../components/ui/ChildHeader';
import { SubmitButton } from '../../../components/common/button/CustomButtons';
import { useQuery } from '../../../hooks/UseQuery';
import useConfirm from '../../../components/common/useConfirm';
import { moduleConstant } from './constant';
import ModalCustom from '../../../components/common/Modal';
import PartTable from './components/view/PartTable';
import TController from './components/view/TController';
import { initialState } from './helpers/initialState';

const View = () => {
  const [moduleData, setModuleData] = useState<any>({
    ...lodash.cloneDeep(initialState),
  });
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const [render, setRender] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const isView = useQuery('isView') === 'true' ? true : false;
  const [DialogSubmit, confirmSubmit] = useConfirm(
    'Submit',
    'Are you sure you want to save this document?'
  );
  const [DialogUpdate, confirmUpdate] = useConfirm(
    'Update',
    'Are you sure you want to update this document?'
  );

  useEffect(()=>{
    if(!id){
      moduleData.module_date = new Date();
    }
  },[]);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`${moduleConstant.apiConstant}/${id}`)
      .then((res) => {
        setModuleData(res?.data);
      })
      .catch((err) => {
        console.error(err);
        setModuleData({
          ...lodash.cloneDeep(initialState),
          processes: [],
        });
      });
  }, [id]);

  const handleSumbit = async (isSubmitted: boolean) => {
    if (id) {
      const ans = await confirmUpdate();
      if (!ans) return;
      await axios
        .put(`${moduleConstant.apiConstant}/${id}`, moduleData)
        .then((res) => {
          if (res.data.status === 'success') {
            alert('Updated Successfully');
          }
        })
        .catch((err) => console.log(err));
    } else {
      const ans = await confirmSubmit();
      if (!ans) return;
      await axios
        .post(`${moduleConstant.apiConstant}`, moduleData)
        .then((res) => {
          if (res.data.status === 'success') {
            alert('created Successfully');
            navigate(-1);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Box>
        <ChildHeader text={moduleConstant.heading}>
          {!isView && (
            <>
              <SubmitButton
                label={moduleData._id ? 'Update' : 'Submit'}
                onClick={() => handleSumbit(true)}
              />
            </>
          )}
        </ChildHeader>
      </Box>
      <TController
        {...{
          moduleData,
          isView,
          setRender,
          setIsOpenPopup,
        }}
      />

      <ModalCustom
        title="Part List"
        openModal={isOpenPopup}
        closeModal={() => {
          setIsOpenPopup(false);
        }}
      >
        <PartTable
          {...{
            moduleData,
          }}
        />
      </ModalCustom>
      <DialogSubmit />
      <DialogUpdate />
    </>
  );
};

export default View;
