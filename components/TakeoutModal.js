import { MAIN_COLOR } from '../theme';
import Button from '../components/Button';
import styled from 'styled-components';

const StyledTakeout = styled.div`
  height: 100%;
  transition: 0.5s;
  transform: translateY(0);
  position: relative;
  z-index: 999;

  &.off {
    transform: translateY(-100%);
  }

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

const TakeoutModal = ({ takeoutModal, setTakeoutModal }) => {
  return (
    <StyledTakeout className={takeoutModal ? '' : 'off'}>
      <div className='upSide'>
        <h2>SUBBWAY</h2>
      </div>
      <div className='downSide'>
        <h3>식사 장소를 선택해주세요</h3>
        <div className='btnContainer'>
          <Button width={160} height={60} onClick={() => setTakeoutModal(false)}>
            먹고가기
          </Button>
          <Button width={160} height={60} onClick={() => setTakeoutModal(false)}>
            포장하기
          </Button>
        </div>
      </div>
    </StyledTakeout>
  );
};

export default TakeoutModal;
