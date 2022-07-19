import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import CartItem from './CartItem';
import { useEffect, useState } from 'react';
import { MAIN_COLOR } from '../theme';
import { BsCheckCircleFill } from 'react-icons/bs';

const StyledCart = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 500;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  display: ${({ cartModal }) => (cartModal ? 'flex' : 'none')};

  div.container {
    height: 90%;
    width: 90%;
    position: relative;
    overflow: hidden;

    div.resultContainer {
      width: 200%;
      height: 100%;
      display: flex;
      transition: 0.4s;
      transform: translateX(${({ success }) => (success ? '-50%' : '0')});

      div.cost {
        width: 50%;
        height: 100%;
        background-color: white;
        padding: 30px 20px 0 20px;
        overflow: hidden;
        display: flex;
        flex-direction: column;

        div.listContainer {
          overflow-y: auto;
          height: 100%;

          & > h2 {
            margin-top: 40px;
          }

          ul {
            width: 100%;

            &::after {
            }
          }

          div.price {
            background-color: lightgray;
            padding: 20px 10px 3px 10px;

            & > h3 {
              font-weight: 700;

              &:last-of-type {
                margin-top: 30px;

                &::before {
                  content: '';
                  display: block;
                  width: 100%;
                  height: 1px;
                  background-color: gray;
                  margin-bottom: 20px;
                }
              }
            }
            & > p {
              font-size: 20px;
              text-align: right;
              margin-bottom: 20px;
            }
          }

          & > p {
            font-size: 20px;
            text-align: right;
            margin-bottom: 20px;
          }

          & > button {
            margin: 30px 0;
            padding: 10px 0;
            width: 100%;
            font-size: 20px;
            background-color: ${MAIN_COLOR};
            border: none;
            color: white;
          }
        }

        h2 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
        }
      }

      div.result {
        width: 50%;
        height: 100%;
        background-color: white;
        padding: 280px 20px 20px 20px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        h2 {
          text-align: center;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 40px;
        }

        & > button {
          width: 100%;
          border: none;
          background-color: ${MAIN_COLOR};
          font-size: 20px;
          color: white;
          padding: 10px 0;
        }
      }
    }

    & > svg {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 10;
    }
  }
`;

const CartModal = ({ cart, isTakeout, cartModal, setCartModal, init }) => {
  const [totalCost, setTotalCost] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setTotalCost(cart.reduce((acc, cur) => acc + cur.item.price / (cur.length / 15), 0));
  }, []);

  return (
    <StyledCart cartModal={cartModal} success={success}>
      <div className='container'>
        <GrClose onClick={() => setCartModal(false)} />
        <div className='resultContainer'>
          <div className='cost'>
            <h2>카트</h2>
            <div className='listContainer'>
              <ul>
                {cart.map((e, i) => (
                  <CartItem key={i} cartItem={e} />
                ))}
              </ul>
              <h2>금액</h2>
              <div className='price'>
                <h3>상품 금액</h3>
                <p>{totalCost} 원</p>
                <h3>특별 할인 이벤트</h3>
                <p>- {totalCost} 원</p>
                <h3>총 금액</h3>
                <p>0 원</p>
              </div>
              <h2>먹을 방식</h2>
              <p>{isTakeout ? '포장해가기' : '매장에서 먹기'}</p>
              <button onClick={() => setSuccess(true)}>결제하기</button>
            </div>
          </div>
          <div className='result'>
            <div>
              <h2>결제 완료</h2>
              <BsCheckCircleFill size={100} color={MAIN_COLOR} />
            </div>
            <button onClick={init}>첫 화면으로 가기</button>
          </div>
        </div>
      </div>
    </StyledCart>
  );
};

export default CartModal;
