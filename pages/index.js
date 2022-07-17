import styled from 'styled-components';
import TakeoutModal from '../components/TakeoutModal';
import Header from '../components/Header';
import { useEffect, useRef, useState } from 'react';
import { MAIN_COLOR } from '../theme';

const IntroMain = styled.main`
  overflow: hidden;
  padding-top: 20px;

  ul {
    display: flex;
    justify-content: center;
    width: 150%;
    transform: translateX(0);
    gap: 20px;
    padding: 0 20px;

    li {
      width: calc(100% / 6);
      height: 42px;
      padding: 10px 0;
      border: 1px solid rgb(140, 140, 140);
      border-radius: 10px;

      p {
        text-align: center;
        font-size: 14px;
        font-weight: 700;
        color: rgb(140, 140, 140);
        transition: 0.3s;
      }

      &.on {
        border: 1px solid ${MAIN_COLOR};
        p {
          color: ${MAIN_COLOR};
        }
      }
    }
  }
`;

const menuData = ['샌드위치', '랩 기타', '샐러드', '아침메뉴', '스마일 썹', '단체메뉴'];

const Home = () => {
  const [takeoutModal, setTakeoutModal] = useState(true);
  const [menu, setMenu] = useState(0);
  const gnbRef = useRef(null);
  const mainRef = useRef(null);

  const [userState, setUserState] = useState({
    takeout: false,
    pickItem: [
      {
        name: '트로피칼샌드위치',
        length: 30,
        source: ['어니언 소스', '볼케이노 소스'],
        exceptVeg: ['피방'],
        withItem: '쿠키음료세트',
      },
    ],
  });

  let x,
    startX,
    transX,
    mainX,
    time = 0;

  const touchStartHandler = (e) => {
    const {
      changedTouches: [{ clientX }],
    } = e;

    gnbRef.current.style.transition = '0s';

    startX = clientX;
    time = new Date().getTime();
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
    if (speed < -0.3 || (transX < -50 && speed < 0) || (transX > -270 && transX < -220)) {
      gnbRef.current.style.transform = `translateX(-270px)`;
    } else if (speed > 0.3 || (transX > -220 && speed !== 0)) {
      gnbRef.current.style.transform = `translateX(0)`;
    }

    // 270 => ul width / 3 으로 고치기
  };

  useEffect(() => {
    gnbRef.current.addEventListener('touchstart', touchStartHandler, { passive: true });
    gnbRef.current.addEventListener('touchmove', touchMoveHandler, { passive: true });
    gnbRef.current.addEventListener('touchend', touchEndHandler, { passive: true });
    return () => {
      gnbRef.current.removeEventListener('touchstart', touchStartHandler);
      gnbRef.current.removeEventListener('touchmove', touchMoveHandler);
      gnbRef.current.removeEventListener('touchend', touchEndHandler);
    };
  }, [gnbRef.current]);

  useEffect(() => {
    mainX = mainRef.current.getBoundingClientRect().x;
  }, [mainRef.current]);

  return (
    <>
      <TakeoutModal
        takeoutModal={takeoutModal} //
        setTakeoutModal={setTakeoutModal}
        userState={userState}
        setUserState={setUserState}
      />
      <Header setTakeoutModal={setTakeoutModal} />
      <IntroMain ref={mainRef}>
        <ul ref={gnbRef}>
          {menuData.map((e, i) => (
            <li
              key={i} //
              className={menu === i ? 'on' : ''}
              onClick={() => setMenu(i)}
            >
              <p>{e}</p>
            </li>
          ))}
        </ul>
      </IntroMain>
    </>
  );
};

export default Home;
