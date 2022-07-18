import styled from 'styled-components';
import { MAIN_COLOR } from '../theme';

const StyledMain = styled.main`
  overflow: hidden;
  width: 100%;

  & > ul {
    display: flex;
    justify-content: center;
    width: 171.4%;
    transform: translateX(0);
    position: relative;
    border-bottom: 1px solid lightgray;

    li {
      width: calc(100% / 6);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding: 10px 0;

      p {
        text-align: center;
        font-size: 14px;
        font-weight: 700;
        color: rgb(140, 140, 140);
        transition: 0.3s;
      }

      &.on {
        p {
          color: ${MAIN_COLOR};
        }
      }
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0px;
      width: calc(100% / 6);
      height: 3px;
      background-color: ${MAIN_COLOR};
      transform: translateX(${({ menu }) => 100 * menu}%);
      transition: 0.3s;
    }
  }

  & > div {
  }
`;

export default StyledMain;
