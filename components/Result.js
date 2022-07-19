import styled from 'styled-components';
import { MAIN_COLOR } from '../theme';
import { AiOutlineCheck } from 'react-icons/ai';
import { useState } from 'react';

const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
  width: 100%;
  padding: 0 30px;
  padding-top: 40px;

  h4 {
    width: 100%;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 30px;

    svg {
      margin-right: 10px;
    }
  }

  p {
    width: 100%;
    font-weight: 500;
    margin-bottom: 80px;
    word-break: keep-all;
    line-height: 1.2;
  }

  button {
    display: block;
    border: none;
    width: 140px;
    height: 40px;
    margin: 20px 0;
    background-color: ${MAIN_COLOR};
    color: white;
    font-weight: 700;
    font-size: 18px;
  }

  textarea {
    resize: none;
    display: block;
    width: 100%;
    height: 120px;
    margin-bottom: 20px;
  }

  h5 {
    margin-top: 40px;
    line-height: 1.3;
    text-align: center;
    font-weight: 700;
  }
`;

const Result = ({ length, sauceList, vegList, cart, setCart, item, setItem }) => {
  const [mes, setMes] = useState('');

  const cartHandler = () => {
    setCart([
      ...cart,
      {
        item,
        length,
        sauceList,
        vegList,
        mes,
      },
    ]);
    setItem();
  };

  return (
    <StyledResult>
      <h4>
        <AiOutlineCheck />
        길이
      </h4>
      <p>{length}cm</p>
      <h4>
        <AiOutlineCheck />
        소스
      </h4>
      <p>{sauceList.join(', ')}</p>
      <h4>
        <AiOutlineCheck />
        먹지 않는 야채
      </h4>
      <p>{vegList.join(', ')}</p>
      <h4>
        <AiOutlineCheck />
        남기고 싶은 메시지
      </h4>
      <textarea onChange={(e) => setMes(e.target.value)}></textarea>
      <button onClick={cartHandler}>장바구니에 넣기</button>
    </StyledResult>
  );
};

export default Result;
