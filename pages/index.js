import TakeoutModal from '../components/TakeoutModal';
import Header from '../components/Header';
import { useEffect, useRef, useState } from 'react';
import { gnbData, menuData } from '../data';
import StyledMain from '../styles/MainStyle';
import MenuList from '../components/MenuList';

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
    console.log(speed);

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
      <StyledMain ref={mainRef} menu={menu}>
        <ul ref={gnbRef}>
          {gnbData.map((e, i) => (
            <li
              key={i} //
              className={menu === i ? 'on' : ''}
              onClick={() => setMenu(i)}
            >
              <p>{e}</p>
            </li>
          ))}
        </ul>
        <MenuList menuData={menuData} />
      </StyledMain>
    </>
  );
};

export default Home;
