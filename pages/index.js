import TakeoutModal from '../components/TakeoutModal';
import Header from '../components/Header';
import { useEffect, useRef, useState } from 'react';
import { gnbData } from '../data';
import StyledMain from '../styles/MainStyle';
import MenuList from '../components/MenuList';
import GnbList from '../components/GnbList';
import getMenuData from '../getMenuData';
import SkeletonList from '../components/SkeletonList';
import ItemModal from '../components/ItemModal';

const Home = () => {
  let mainX = 0;
  const [loading, setLoading] = useState(true);
  const [takeoutModal, setTakeoutModal] = useState(true);
  const [menu, setMenu] = useState(0);
  const [menuData, setMenuData] = useState();
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState();
  const mainRef = useRef(null);
  const [userState, setUserState] = useState({
    takeout: false,
    pickItem: [],
  });

  const init = () => {
    setUserState({
      takeout: false,
      pickItem: [],
    });
    setItem();
    setCart([]);
    setMenu(0);
    setTakeoutModal(true);
  };

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

  const pickItemHandler = (e) => {
    setItem(e);
  };

  return (
    <>
      <TakeoutModal
        takeoutModal={takeoutModal} //
        setTakeoutModal={setTakeoutModal}
        userState={userState}
        setUserState={setUserState}
      />
      {item && (
        <ItemModal //
          item={item}
          setItem={setItem}
          cart={cart}
          setCart={setCart}
        />
      )}
      <Header init={init} />
      <StyledMain ref={mainRef} menu={menu}>
        <GnbList
          gnbData={gnbData} //
          menu={menu}
          mainX={mainX}
          setMenu={setMenu}
          loading={loading}
        />
        {loading ? (
          <SkeletonList />
        ) : (
          <MenuList //
            menuData={menuData}
            menu={menu}
            pickItemHandler={pickItemHandler}
            cart={cart}
          />
        )}
      </StyledMain>
    </>
  );
};

export default Home;
