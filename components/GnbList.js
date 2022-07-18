import styled, { keyframes } from 'styled-components';
import { MAIN_COLOR } from '../theme';
import { useEffect, useRef, useState } from 'react';
import { clicked } from '../styles/animation';

const StyledGnbList = styled.ul`
  display: flex;
  justify-content: center;
  width: 171.4%;
  transform: translateX(0);
  position: relative;
  border-bottom: 1px solid lightgray;

  li {
    width: calc(100% / 6);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    overflow: hidden;

    p {
      text-align: center;
      font-size: 14px;
      font-weight: 700;
      color: rgb(140, 140, 140);
      transition: 0.3s;
    }

    &.on {
      animation: ${clicked} 0.3s forwards;
      p {
        color: ${MAIN_COLOR};
      }
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0px;
    width: calc(100% / 6);
    height: 3px;
    background-color: ${MAIN_COLOR};
    transform: translateX(${({ menu }) => 100 * menu}%);
    transition: 0.3s;
  }
`;

const GnbList = ({ gnbData, menu, mainX, setMenu, loading }) => {
  const gnbRef = useRef(null);

  let x,
    startX,
    transX,
    ulWidth,
    liWidth,
    time = 0;

  const touchStartHandler = (e) => {
    const {
      changedTouches: [{ clientX }],
    } = e;

    gnbRef.current.style.transition = '0s';
    time = new Date().getTime();

    startX = clientX;
    x = gnbRef.current.getBoundingClientRect().x;
  };

  const touchMoveHandler = (e) => {
    const {
      changedTouches: [{ clientX }],
    } = e;

    transX = clientX - startX + x - mainX;

    gnbRef.current.style.transform = `translateX(${transX}px)`;
  };

  const touchEndHandler = (e) => {
    const {
      changedTouches: [{ clientX }],
    } = e;
    const speed = (clientX - startX) / (new Date().getTime() - time);

    gnbRef.current.style.transition = '0.3s';

    if (speed < -0.3) {
      gnbRef.current.style.transform = `translateX(-${ulWidth * 0.41666}px)`;
    } else if (speed > 0.3) {
      gnbRef.current.style.transform = `translateX(0)`;
    } else if (transX > -liWidth && speed !== 0) {
      gnbRef.current.style.transform = `translateX(0)`;
    } else if (transX <= -liWidth && transX > -liWidth * 2 && speed !== 0) {
      gnbRef.current.style.transform = `translateX(-${liWidth}px)`;
    } else if (transX <= -liWidth * 2 && transX > -liWidth * 2.5 && speed !== 0) {
      gnbRef.current.style.transform = `translateX(-${liWidth * 2}px)`;
    } else if (transX < -ulWidth * 0.41666 && speed !== 0) {
      gnbRef.current.style.transform = `translateX(-${ulWidth * 0.41666}px)`;
    }
  };

  useEffect(() => {
    ulWidth = gnbRef.current.getBoundingClientRect().width;
    liWidth = ulWidth / 6;

    gnbRef.current && gnbRef.current.addEventListener('touchstart', touchStartHandler, { passive: true });
    gnbRef.current && gnbRef.current.addEventListener('touchmove', touchMoveHandler, { passive: true });
    gnbRef.current && gnbRef.current.addEventListener('touchend', touchEndHandler, { passive: true });
    return () => {
      gnbRef.current && gnbRef.current.removeEventListener('touchstart', touchStartHandler);
      gnbRef.current && gnbRef.current.removeEventListener('touchmove', touchMoveHandler);
      gnbRef.current && gnbRef.current.removeEventListener('touchend', touchEndHandler);
    };
  }, [gnbRef.current]);

  return (
    <StyledGnbList ref={gnbRef} menu={menu}>
      {gnbData.map((e, i) => (
        <li
          key={i} //
          className={menu === i ? 'on' : ''}
          onClick={() => !loading && setMenu(i)}
        >
          <p>{e}</p>
        </li>
      ))}
    </StyledGnbList>
  );
};

export default GnbList;
