import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MAIN_COLOR, YELLOW_COLOR } from '../theme';
import { BiArrowBack } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import Sauce from './Sauce';
import Veg from './Veg';
import Result from './Result';
import StyledModal from '../styles/ItemModalStyle';

const ItemModal = ({ item, setItem, cart, setCart }) => {
  const downRef = useRef(null);

  const [step, setStep] = useState(0);
  const [length, setLength] = useState();
  const [sauceList, setSauceList] = useState([]);
  const [vegList, setVegList] = useState([]);

  const itemInit = () => {
    setItem();
    setStep(0);
    setLength();
    setSauceList([]);
    setVegList([]);
  };

  const legnthHandler = (selectLength) => {
    setLength(selectLength);
    setTimeout(() => setStep(1), 200);
  };

  const sauceHandler = (e, sauce) => {
    if (!sauceList.find((element) => element === sauce) && sauceList.length < 2) {
      setSauceList([...sauceList, sauce]);
      e.currentTarget.classList.add('on');
    } else {
      setSauceList(sauceList.filter((element) => element !== sauce));
      e.currentTarget.classList.remove('on');
    }
  };

  useEffect(() => {
    if (sauceList.length === 2) {
      setTimeout(() => {
        downRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        setStep(2);
      }, 200);
    }
  }, [sauceList.length]);

  const vegHandler = (e, veg) => {
    if (!vegList.find((element) => element === veg)) {
      setVegList([...vegList, veg]);
      e.currentTarget.classList.add('on');
    } else {
      setVegList(vegList.filter((element) => element !== veg));
      e.currentTarget.classList.remove('on');
    }
  };

  const showResult = () => {
    setStep(3);
    downRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const back = () => {
    downRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    step > 0 && setStep(step - 1);
  };

  return (
    <StyledModal length={length} step={step}>
      <div className='container'>
        <GrClose size={20} onClick={itemInit} />
        <div className='upSide'>
          <div className='circle' style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
          <div className='right'>
            <h3>{item.krName}</h3>
            <p>{item.enName}</p>
          </div>
        </div>
        <div className='downSide' ref={downRef}>
          <ul>
            <li>
              <h4>원하는 길이를 선택해주세요</h4>
              <div className='lengthContainer'>
                <button onClick={() => legnthHandler(15)}>15cm</button>
                <button onClick={() => legnthHandler(30)}>30cm</button>
              </div>
            </li>
            <li>
              <h4>원하는 소스를 선택해주세요</h4>
              <Sauce sauceHandler={sauceHandler} />
            </li>
            <li>
              <h4>제외할 야채를 골라주세요</h4>
              <Veg vegHandler={vegHandler} />
              <button onClick={showResult}>확인</button>
            </li>
            <li>
              <h4>확인후 카트에 넣어주세요</h4>
              <Result //
                length={length}
                sauceList={sauceList}
                vegList={vegList}
                cart={cart}
                setCart={setCart}
                item={item}
                setItem={setItem}
              />
            </li>
          </ul>
        </div>
        <BiArrowBack onClick={back} size={30} />
      </div>
    </StyledModal>
  );
};

export default ItemModal;
