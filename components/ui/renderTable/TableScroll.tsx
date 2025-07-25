import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import React, { ReactNode, useRef, useState } from 'react';
import { ButtonStyled, TableContainerStyled } from './styled';

interface IProps {
  children: ReactNode;
}

const TableScroll = ({ children, ...rest }: IProps) => {
  const tableRef = useRef<HTMLDivElement | null>(null);
  const scrollSpeed = useRef<number>(80);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const [leftButtonPressed, setLeftButtonPressed] = useState(false);
  const [rightButtonPressed, setRightButtonPressed] = useState(false);

  const handleScroll = (scrolltype: string): void => {
    if (tableRef.current) {
      if (scrolltype === 'right') {
        tableRef.current.scrollLeft += scrollSpeed.current;
      }
      if (scrolltype === 'left') {
        tableRef.current.scrollLeft -= scrollSpeed.current;
      }
    }
    // Increase scroll speed gradually
    if (scrollSpeed.current < 1000) {
      // Adjust the maximum speed as needed
      scrollSpeed.current += 10; // Increase scroll speed by 10 (adjust as needed)
      scrollTimeout.current = setTimeout(() => {
        handleScroll(scrolltype);
      }, 100); // Adjust the time interval as needed
    }
  };

  const handleScrollStart = (scrolltype: string): void => {
    // Clear any existing timeout and reset scroll speed
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    scrollSpeed.current = 80; // Reset scroll speed to the initial value
    // Start scrolling
    handleScroll(scrolltype);
  };

  const handleScrollStop = (): void => {
    // Clear the timeout to stop scrolling
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    // Reset button states
    setLeftButtonPressed(false);
    setRightButtonPressed(false);
  };

  return (
    <main {...rest}>
      <ButtonStyled
        left={true}
        onMouseDown={() => {
          setLeftButtonPressed(true);
          handleScrollStart('left');
        }}
        onMouseUp={() => handleScrollStop()}
        onMouseLeave={() => handleScrollStop()}
        style={{
          boxShadow: leftButtonPressed
            ? 'inset 0px 0px 5px rgba(0,0,0,0.5)'
            : 'none',
        }}
      >
        <div>
          <ArrowBackIos style={{ color: '#fff' }} />
        </div>
      </ButtonStyled>
      <ButtonStyled
        right={true}
        onMouseDown={() => {
          setRightButtonPressed(true);
          handleScrollStart('right');
        }}
        onMouseUp={() => handleScrollStop()}
        onMouseLeave={() => handleScrollStop()}
        style={{
          boxShadow: rightButtonPressed
            ? 'inset 0px 0px 5px rgba(0,0,0,0.5)'
            : 'none',
        }}
      >
        <div>
          <ArrowForwardIos style={{ color: '#fff' }} />
        </div>
      </ButtonStyled>
      <TableContainerStyled id="machinetable" ref={tableRef}>
        {children}
      </TableContainerStyled>
    </main>
  );
};

export default TableScroll;
