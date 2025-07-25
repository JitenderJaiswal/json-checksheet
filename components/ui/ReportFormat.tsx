import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';

interface Iobj {
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
}
const ReportFormat = (props: Iobj) => {
  const { text1, text2, text3, text4 } = props;
  return (
    <AppBar
      position="static"
      color="secondary"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '-5px',
        fontSize: '1.6rem',
        padding: '0.75rem 1rem',
        color: 'white',
        borderTop: '1px solid #494949',
        borderBottom: '1px solid #494949',
        letterSpacing: '0.4em',
        height: '70px',
        textTransform: 'uppercase',
        alignItems: 'center',
        fontWeight: '300',
      }}
    >
      <Stack>
        <Typography variant="body1">{text1}</Typography>
        <Typography variant="body1">{text2}</Typography>
      </Stack>
      <Stack>
        <Typography variant="body1">{text3}</Typography>
        <Typography variant="body1">{text4}</Typography>
      </Stack>
    </AppBar>
  );
};

export default ReportFormat;
