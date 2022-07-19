import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineArrowDown, AiOutlineCheck } from 'react-icons/ai';
import Image from 'next/image';
import { GrClose } from 'react-icons/gr';

const StyledCartItem = styled.li`
  width: 100%;
  height: ${({ optionView }) => (optionView ? '500px' : '100px')};
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  transition: 0.4s;
  background-color: ${({ optionView }) => (optionView ? 'lightgray' : 'white')};

  h4 {
    font-size: 18px;
    font-weight: 700;
  }

  p {
    color: gray;
  }

  div.show {
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 0;
    gap: 10px;

    div.right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      width: 140px;

      div.optBtnContainer {
        display: flex;
        justify-content: space-between;

        button {
          border: none;
          background-color: transparent;
          text-align: left;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 4px;

          &:first-of-type {
            svg {
              transition: 0.4s;
              transform: rotate(${({ optionView }) => (optionView ? '180deg' : '0')});
            }
          }
        }
      }
    }
  }

  div.hidden {
    height: 400px;
    padding: 20px;
    background-color: ${({ optionView }) => (optionView ? 'lightgray' : 'white')};
    transition: 0.4s;

    svg {
      margin-right: 10px;
    }

    h4 {
      margin-bottom: 14px;
    }

    p {
      margin-bottom: 22px;

      &:last-child {
        border: 1px solid gray;
        line-height: 1.3;
        height: 110px;
        margin-bottom: 0;
        padding: 10px;
        overflow-y: auto;
      }
    }
  }
`;

const CartItem = ({
  cartItem: {
    item: { imageUrl, krName },
    length,
    sauceList,
    vegList,
    mes,
  },
  setCart,
  cart,
  index,
}) => {
  const [optionView, setOptionView] = useState(false);

  const removeHandler = () => setCart(cart.filter((_, i) => i !== index));

  return (
    <StyledCartItem optionView={optionView}>
      <div className='show'>
        <Image src={imageUrl} alt={krName} width={120} height={80} />
        <div className='right'>
          <h4>{krName}</h4>
          <div className='optBtnContainer'>
            <button onClick={() => setOptionView(!optionView)}>
              옵션 보기 <AiOutlineArrowDown />
            </button>
            <button onClick={removeHandler}>
              <GrClose />
            </button>
          </div>
        </div>
      </div>
      <div className='hidden'>
        <h4>
          <AiOutlineCheck />
          길이
        </h4>
        <p>{length}cm</p>
        <h4>
          <AiOutlineCheck />
          선택한 소스
        </h4>
        <p>{sauceList.join(', ')}</p>
        <h4>
          <AiOutlineCheck />
          제외 야채
        </h4>
        <p>{vegList.join(', ')}</p>
        <h4>
          <AiOutlineCheck />
          기타 메시지
        </h4>
        <p>{mes}</p>
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
