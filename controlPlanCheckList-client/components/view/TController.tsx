import { Box } from '@mui/material';
import { RenderTable } from '../../../../../components/ui';
import TFoot from './TFoot';
import THead from './THead';
import TBody1 from './TBody1';

interface IProps {
  moduleData: any;
  isView: boolean;
  setRender: any;
  setIsOpenPopup?: any;
}

const TController = ({
  moduleData,
  isView,
  setRender,
  setIsOpenPopup,
}: IProps) => {
  return (
    <Box>
      <RenderTable>
        <THead
          {...{
            moduleData,
            isView,
            setIsOpenPopup,
            setRender,
          }}
        />
        <TBody1 moduleData={moduleData} isView={isView} />
        <TFoot />
      </RenderTable>
    </Box>
  );
};

export default TController;
