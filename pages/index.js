import Head from 'next/head';
import styled from 'styled-components';
import { MAIN_COLOR } from '../theme';
import Button from '../components/Button';

const IntroMain = styled.main`
  height: 100%;

  div.upSide {
    height: 70%;
    background-image: url('./img/intro.avif');
    background-size: cover;
    padding-top: 100px;
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.2);
    position: relative;

    h2 {
      text-align: center;
      font-size: 50px;
      color: white;
      font-weight: 700;
    }
  }

  div.downSide {
    height: 30%;
    background-color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    font-size: 20px;

    div.btnContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
  }
`;

export default function Home() {
  return (
    <IntroMain>
      <div className='upSide'>
        <h2>SUBBWAY</h2>
      </div>
      <div className='downSide'>
        <h3>식사 장소를 선택해주세요</h3>
        <div className='btnContainer'>
          <Button width={160} height={60}>
            먹고가기
          </Button>
          <Button width={160} height={60}>
            포장하기
          </Button>
        </div>
      </div>
    </IntroMain>
  );
}
