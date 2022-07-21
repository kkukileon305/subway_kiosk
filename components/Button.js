import { useState } from 'react';
import styled from 'styled-components';
import { MAIN_COLOR } from '../theme';

const StyledButton = styled.button`
  width: ${({ width }) => (width ? width : 100)}px;
  height: ${({ height }) => (height ? height : 100)}px;
  background-color: ${MAIN_COLOR};
  border: none;
  font-size: 20px;
  font-weight: 700;
  color: white;
  border-radius: ${({ borderRadius }) => borderRadius ?? '10px'};
  position: relative;

  &.touchStart {
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      left: ${({ trans: { x } }) => `${x - 65}px`};
      top: ${({ trans: { y } }) => `${y - 65}px`};
      width: 130px;
      height: 130px;
      border-radius: 65px;
      animation: btnTouched forwards 0.4s;
      background-color: rgba(0, 0, 0, 0.4);
    }

    @keyframes btnTouched {
      from {
        transform: scale(0);
        opacity: 1;
      }
      to {
        transform: scale(5);
        opacity: 0.5;
      }
    }
  }
`;

const Button = ({ width, height, onClick, children, borderRadius }) => {
  const [trans, setTrans] = useState({ x: 0, y: 0 });
  const [touched, setTouched] = useState(false);
  const [time, setTime] = useState(0);

  const touchStartHandler = ({ target, changedTouches: [{ clientX, clientY }] }) => {
    const { x: bX, y: bY } = target.getBoundingClientRect();

    setTime(new Date().getTime());
    setTrans({
      x: clientX - bX,
      y: clientY - bY,
    });
    setTouched(true);
  };

  const touchEndHandler = () => {
    const duration = new Date().getTime() - time;

    if (duration < 300) {
      setTimeout(() => setTouched(false), 300);
    } else {
      setTouched(false);
    }
  };

  return (
    <StyledButton //
      width={width}
      height={height}
      onClick={() => setTimeout(() => onClick(), 300)}
      onTouchStart={touchStartHandler}
      onTouchEnd={touchEndHandler}
      onTouchCancel={touchEndHandler}
      trans={trans}
      className={touched ? 'touchStart' : ''}
      borderRadius={borderRadius}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
