import TakeoutModal from '../components/TakeoutModal';
import Header from '../components/Header';
import { useEffect, useRef, useState } from 'react';
import { gnbData } from '../data';
import StyledMain from '../styles/MainStyle';
import MenuList from '../components/MenuList';
import GnbList from '../components/GnbList';
import getMenuData from '../getMenuData';
import SkeletonList from '../components/SkeletonList';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [takeoutModal, setTakeoutModal] = useState(true);
  const [menu, setMenu] = useState(0);
  const [menuData, setMenuData] = useState();
  const mainRef = useRef(null);

  let mainX = 0;

  const [userState, setUserState] = useState({
    takeout: false,
    pickItem: [],
  });

  useEffect(() => {
    mainX = mainRef.current.getBoundingClientRect().x;
  }, [mainRef.current]);

  useEffect(() => {
    if (!takeoutModal) {
      setLoading(true);

      try {
        (async () => {
          const res = await getMenuData();
          setMenuData(res);
          setLoading(false);
        })();
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  }, [takeoutModal, menu]);

  return (
    <>
      <TakeoutModal
        takeoutModal={takeoutModal} //
        setTakeoutModal={setTakeoutModal}
        userState={userState}
        setUserState={setUserState}
      />
      <Header setTakeoutModal={setTakeoutModal} setUserState={setUserState} />
      <StyledMain ref={mainRef} menu={menu}>
        <GnbList
          gnbData={gnbData} //
          menu={menu}
          mainX={mainX}
          setMenu={setMenu}
          loading={loading}
        />
        {loading ? <SkeletonList /> : <MenuList menuData={menuData} menu={menu} />}
      </StyledMain>
    </>
  );
};

export default Home;
