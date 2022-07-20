import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MAIN_COLOR } from '../theme';

const StyledDiv = styled.div`
  width: 100%;

  h2 {
    font-size: 30px;
    font-weight: 800;
    margin-left: 35px;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  ul {
    width: 100%;

    li {
      width: 100%;
      height: 130px;
      background-color: white;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 30px;
      padding-left: 35px;

      div.circle {
        width: 120px;
        height: 100px;
        background-size: cover;
        background-position: center;
        position: relative;
      }

      div.right {
        width: 200px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 30px;
        white-space: pre-wrap;
        word-break: keep-all;
        position: relative;

        h3 {
          font-size: 20px;
          height: 20px;
          line-height: 1.2;
          font-weight: 700;
        }

        p {
          font-size: 16px;
          line-height: 1.2;
          color: rgb(140, 140, 140);
        }
      }

      &.touchStart {
        position: relative;
        overflow: hidden;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100vw;
          height: 100vw;
          border-radius: 50%;
          background-color: lightgray;
          animation: touchSizeUp 0.4s forwards;

          @keyframes touchSizeUp {
            from {
              transform: translate(${({ trans: { x, y } }) => `calc(${x}px - 50vw), calc(${y}px - 50vw)`}) scale(0);
              opacity: 1;
            }
            to {
              transform: translate(${({ trans: { x, y } }) => `calc(${x}px - 50vw), calc(${y}px - 50vw)`}) scale(3);
              opacity: 0.5;
            }
          }
        }
      }
    }
  }
`;

const MenuList = ({ menuData, menu, pickItemHandler }) => {
  const [curMenuName, setCurMenuName] = useState('');
  const [curMenu, setCurMenu] = useState();
  const [trans, setTrans] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);

  const touchStartHandler = ({ target, changedTouches: [{ clientX, clientY }] }) => {
    const li = target.closest('li');
    const { x: liX, y: liY } = li.getBoundingClientRect();

    setTime(new Date().getTime());
    setTrans({ x: clientX - liX, y: clientY - liY });
    li.classList.add('touchStart');
  };

  const touchEndHandler = ({ target }) => {
    const li = target.closest('li');

    const duration = new Date().getTime() - time;

    if (duration < 300) {
      setTimeout(() => li.classList.remove('touchStart'), 300);
    } else {
      li.classList.remove('touchStart');
    }
  };

  useEffect(() => {
    setCurMenuName(Object.keys(menuData)[menu]);
  }, [menu]);

  useEffect(() => {
    setCurMenu(menuData[curMenuName]);
  }, [curMenuName]);

  return (
    <StyledDiv trans={trans}>
      <h2>{curMenuName.toUpperCase()}</h2>
      <ul>
        {curMenu &&
          curMenu.map((e, i) => (
            <li
              key={i} //
              onClick={() => setTimeout(() => pickItemHandler(e), 100)}
              onTouchStart={touchStartHandler}
              onTouchEnd={touchEndHandler}
              onTouchCancel={touchEndHandler}
            >
              <div className='circle' style={{ backgroundImage: `url(${e.imageUrl})` }}></div>
              <div className='right'>
                <h3>{e.krName}</h3>
                <p>{e.enName}</p>
              </div>
            </li>
          ))}
      </ul>
    </StyledDiv>
  );
};

export default MenuList;
