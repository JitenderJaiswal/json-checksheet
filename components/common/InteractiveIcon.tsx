import React from 'react';

function MouseOver(event: any) {
  event.target.style.transform = 'scale(1.2)';
  event.target.style.transition = '200ms';
  event.target.style.border = '1px solid #ced4da';
  event.target.style.borderRadius = '5px';
  event.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
  event.target.parentElement.style.zIndex = '1001';
}
function MouseOut(event: any) {
  event.target.style.transform = 'scale(1)';
  event.target.style.border = 'none';
  event.target.style.boxShadow = 'none';
  event.target.style.transition = '200ms';
  event.target.parentElement.style.zIndex = '-1000';
}
function MouseDown(event: any) {
  event.target.style.transform = 'scale(1.1)';
  event.target.style.transition = '300ms';
  event.target.style.border = '1px solid #868e96';
  event.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
  event.target.parentElement.style.zIndex = '1001';
}

const InteractiveIcon = ({
  children,
  isYellow,
  isBlue,
  planType,
  active,
  pColor,
}: any) => {
  let isA = planType === 'A';
  let isP = planType === 'P';
  let backgroundColor = '#f1f3f5'; // Default white color
  let color = '#495057';
  if (active) {
    if (isP) {
      backgroundColor = pColor || '#7F7F7F';
      color = '#FFFFFF';
    } else if (isA) {
      color = '#FFFFFF';
      backgroundColor = '#000000'; // Black for planType A
    }
  }
  return (
    <>
      <span
        onMouseOver={MouseOver}
        onMouseOut={MouseOut}
        onMouseDown={MouseDown}
        style={{
          fontSize: '2.5rem',
          display: 'flex',
          outline: 'none',
          width: '150px',
          height: '45px',
          alignItems: 'center',
          justifyContent: 'center',
          color: color,
          // color: '#495057',
          backgroundColor: backgroundColor,

          // backgroundColor: `${
          //   (isYellow && isP && '#7F7F7F') || (isBlue && isA && '#000000') || '#f1f3f5'
          //   // (isYellow && '#ffd43b') || (isBlue && '#00b0f0') || '#f1f3f5'
          // }`,
          boxShadow: '0 30px 40px rgb(255, 227, 227,.2)',
          cursor: 'pointer',
          textShadow: '1px 1px #b0b0b0',
        }}
      >
        {children}
      </span>
    </>
  );
};

export default InteractiveIcon;
