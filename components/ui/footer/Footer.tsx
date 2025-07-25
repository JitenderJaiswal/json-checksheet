import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const Div = styled.div`
  background-color: #161a1d;
  display: flex;
  margin-top: 1rem;
  height: 36px;
  justify-content: center;
  padding: 0.3rem;
  color: white;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index:10;
`;

function Footer() {
  return (
    <section style={{ paddingTop: '4rem'}}>
      <Div>
        <Typography>
          <span>
            {' '}
            Copyright &copy; {new Date().getFullYear()} Mushin Innovation Labs.
            All Rights Reserved. Mushin™ AQUA Patent Pending.
          </span>
        </Typography>
      </Div>
    </section>
  );
}

export default Footer;
