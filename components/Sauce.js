import Image from 'next/image';
import styled from 'styled-components';
import { MAIN_COLOR } from '../theme';

const StyledSauce = styled.div`
  width: 260px;

  h5 {
    margin: 20px 0;
    font-weight: 500;
    text-align: center;
    background-color: white;
  }

  & > div.btnContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;

    button {
      border: none;
      background: transparent;
      width: 120px;
      height: 125px;
      border: 1px solid transparent;
      margin: 0;
      padding: 0;
      overflow: hidden;
      transition: 0.2s;

      &.on {
        border: 1px solid ${MAIN_COLOR};
      }
    }

    &:last-of-type {
      padding-bottom: 30px;
    }
  }
`;

const Sauce = ({ sauceHandler }) => (
  <>
    <StyledSauce>
      <h5>Hot</h5>
      <div className='btnContainer'>
        <button onClick={(e) => sauceHandler(e, '칠리')}>
          <Image src='https://www.subway.co.kr/images/menu/img_recipe_s12.jpg' alt='chilli sauce' width={130} height={100} />
          <p>칠리</p>
        </button>
        <button onClick={(e) => sauceHandler(e, '핫 칠리')}>
          <Image src='https://www.subway.co.kr/images/menu/img_recipe_s18.jpg' alt='chilli sauce' width={130} height={100} />
          <p>핫 칠리</p>
        </button>
      </div>
    </StyledSauce>
    <StyledSauce>
      <h5>Sweet</h5>
      <div className='btnContainer'>
        <button onClick={(e) => sauceHandler(e, '허니 머스타드')}>
          <Image src='https://www.subway.co.kr/images/menu/img_recipe_s03.jpg' alt='chilli sauce' width={130} height={100} />
          <p>허니 머스타드</p>
        </button>
        <button onClick={(e) => sauceHandler(e, '머스타드')}>
          <Image src='https://www.subway.co.kr/images/menu/img_recipe_s11.jpg' alt='chilli sauce' width={130} height={100} />
          <p>머스타드</p>
        </button>
        <button onClick={(e) => sauceHandler(e, '스위트 어니언')}>
          <Image src='https://www.subway.co.kr/images/menu/img_recipe_s07.jpg' alt='chilli sauce' width={130} height={100} />
          <p>스위트 어니언</p>
        </button>
      </div>
    </StyledSauce>
    <StyledSauce>
      <h5>Savory</h5>
      <div className='btnContainer'>
        <button onClick={(e) => sauceHandler(e, '랜치')}>
          <Image src='https://www.subway.co.kr/images/menu/img_recipe_s01.jpg' alt='chilli sauce' width={130} height={100} />
          <p>랜치</p>
        </button>
        <button onClick={(e) => sauceHandler(e, '사우스웨스트 치폴레')}>
          <Image src='https://www.subway.co.kr/images/menu/img_recipe_s09.jpg' alt='chilli sauce' width={130} height={100} />
          <p>사우스웨스트 치폴레</p>
        </button>
      </div>
    </StyledSauce>
  </>
);

export default Sauce;
