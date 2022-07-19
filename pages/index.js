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
import CartModal from '../components/CartModal';

const Home = () => {
  let mainX = 0;
  const [loading, setLoading] = useState(true);
  const [takeoutModal, setTakeoutModal] = useState(true);
  const [menu, setMenu] = useState(0);
  const [menuData, setMenuData] = useState();
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState();
  const [isTakeout, setIsTakeout] = useState(false);
  const mainRef = useRef(null);
  const [cartModal, setCartModal] = useState(false);

  const init = () => {
    setIsTakeout(false);
    setItem();
    setCart([]);
    setMenu(0);
    setTakeoutModal(true);
    setCartModal(false);
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
        isTakeout={isTakeout}
        setIsTakeout={setIsTakeout}
      />
      {item && (
        <ItemModal //
          item={item}
          setItem={setItem}
          cart={cart}
          setCart={setCart}
        />
      )}
      {cartModal && (
        <CartModal //
          cart={cart}
          isTakeout={isTakeout}
          cartModal={cartModal}
          setCartModal={setCartModal}
          init={init}
        />
      )}
      <Header init={init} setCartModal={setCartModal} />
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
            isTakeout={isTakeout}
          />
        )}
      </StyledMain>
    </>
  );
};

export default Home;
