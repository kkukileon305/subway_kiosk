import TakeoutModal from '../components/TakeoutModal';
import Header from '../components/Header';
import { useEffect, useRef, useState } from 'react';
import { gnbData, menuData } from '../data';
import StyledMain from '../styles/MainStyle';
import MenuList from '../components/MenuList';
import GnbList from '../components/GnbList';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [takeoutModal, setTakeoutModal] = useState(true);
  const [menu, setMenu] = useState(0);
  const mainRef = useRef(null);

  let mainX = 0;

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
        <GnbList gnbData={gnbData} menu={menu} mainX={mainX} setMenu={setMenu} />
        <MenuList menuData={menuData} />
      </StyledMain>
    </>
  );
};

export default Home;
