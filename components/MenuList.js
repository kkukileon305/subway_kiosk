import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MAIN_COLOR } from '../theme';

const StyledDiv = styled.div`
  width: 100%;

  h2 {
    font-size: 30px;
    font-weight: 800;
    margin-left: 35px;
    margin-top: 30px;
  }

  ul {
    width: 100%;

    li {
      width: 100%;
      height: 150px;
      background-color: white;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 30px;
      padding-left: 35px;

      div.circle {
        width: 120px;
        height: 100px;
        background-size: cover;
        background-position: center;
      }

      div.right {
        width: 200px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 30px;
        white-space: pre-wrap;
        word-break: keep-all;

        h3 {
          font-size: 20px;
          height: 20px;
          line-height: 1.2;
          font-weight: 700;
        }

        p {
          font-size: 16px;
          line-height: 1.2;
          color: rgb(140, 140, 140);
        }
      }
    }
  }
`;

const MenuList = ({ menuData, menu, pickItemHandler }) => {
  const [curMenuName, setCurMenuName] = useState('샌드위치');
  const [curMenu, setCurMenu] = useState();

  useEffect(() => {
    setCurMenuName(Object.keys(menuData)[menu]);
  }, [menu]);

  useEffect(() => {
    setCurMenu(menuData[curMenuName]);
  }, [curMenuName]);

  return (
    <StyledDiv>
      <h2>{curMenuName.toUpperCase()}</h2>
      <ul>
        {curMenu &&
          curMenu.map((e, i) => (
            <li key={i} onClick={() => pickItemHandler(e)}>
              <div className='circle' style={{ backgroundImage: `url(${e.imageUrl})` }}></div>
              <div className='right'>
                <h3>{e.krName}</h3>
                <p>{e.enName}</p>
              </div>
            </li>
          ))}
      </ul>
    </StyledDiv>
  );
};

export default MenuList;
