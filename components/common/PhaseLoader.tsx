import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import styled from '@emotion/styled';

interface IProps {
  loader: boolean;
  phase: string;
}

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const LoaderSVG = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const PhaseText = styled.div`
  color: white;
  font-size: 16px;
  text-align: center;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  min-width: 250px;
`;

export const PhaseLoader = ({ loader, phase }: IProps) => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loader}
    >
      <LoaderContainer>
        <LoaderSVG>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <circle
              fill="#FF156D"
              stroke="#FF156D"
              strokeWidth="10"
              r="10"
              cx="30"
              cy="65"
            >
              <animate
                attributeName="cy"
                calcMode="spline"
                dur="2s"
                values="65;135;65;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.6s"
              />
            </circle>
            <circle
              fill="#15FFBD"
              stroke="#15FFBD"
              strokeWidth="10"
              r="10"
              cx="75"
              cy="65"
            >
              <animate
                attributeName="cy"
                calcMode="spline"
                dur="2s"
                values="65;135;65;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.4s"
              />
            </circle>
            <circle
              fill="#156DFF"
              stroke="#156DFF"
              strokeWidth="10"
              r="10"
              cx="120"
              cy="65"
            >
              <animate
                attributeName="cy"
                calcMode="spline"
                dur="2s"
                values="65;135;65;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.2s"
              />
            </circle>
            <circle
              fill="#FF8C15"
              stroke="#FF8C15"
              strokeWidth="10"
              r="10"
              cx="165"
              cy="65"
            >
              <animate
                attributeName="cy"
                calcMode="spline"
                dur="2s"
                values="65;135;65;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="0s"
              />
            </circle>
          </svg>
        </LoaderSVG>
        <PhaseText>{phase}</PhaseText>
      </LoaderContainer>
    </Backdrop>
  );
};