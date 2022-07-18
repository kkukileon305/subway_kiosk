import styled from 'styled-components';
import { MAIN_COLOR, YELLOW_COLOR } from '../theme';

const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 500;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  div.container {
    width: 90%;
    background-color: white;
    position: relative;

    div.upSide {
      width: 100%;
      height: 150px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 30px;
      padding-left: 35px;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: 0px;

        left: calc(10%);
        width: 80%;
        height: 1px;
        background-color: ${MAIN_COLOR};
      }

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

    div.downSide {
      height: 500px;
      position: relative;
      overflow-y: ${({ step }) => (step === 0 ? 'hidden' : 'scroll')};
      overflow-x: hidden;

      & > ul {
        width: 400%;
        display: flex;
        transition: 0.3s;
        transform: translateX(${({ step }) => -25 * step}%);

        & > li {
          width: 33.333%;
          display: flex;
          align-items: center;
          flex-direction: column;
          padding-top: 50px;

          & > h4 {
            font-size: 20px;
            font-weight: 700;
            color: ${MAIN_COLOR};
          }

          & > div.lengthContainer {
            display: flex;
            gap: 40px;
            margin-top: 60px;

            button {
              width: 100px;
              height: 100px;
              transition: 0.2s;
              color: white;
              font-size: 24px;

              &:first-child {
                background-color: ${({ length }) => (length === 15 ? YELLOW_COLOR : MAIN_COLOR)};
                border: 5px solid ${({ length }) => (length === 15 ? YELLOW_COLOR : MAIN_COLOR)};
              }
              &:last-child {
                background-color: ${({ length }) => (length === 30 ? YELLOW_COLOR : MAIN_COLOR)};
                border: 5px solid ${({ length }) => (length === 30 ? YELLOW_COLOR : MAIN_COLOR)};
              }
            }
          }

          & > button {
            display: block;
            border: none;
            width: 100px;
            height: 40px;
            margin: 20px 0;
            background-color: ${MAIN_COLOR};
            color: white;
            font-weight: 700;
            margin-bottom: 80px;
          }
        }
      }
    }

    & > svg {
      position: absolute;
      z-index: 10;
      border: none;
      background-color: transparent;

      &:first-child {
        top: 10px;
        right: 10px;
      }

      &:last-child {
        left: 10px;
        top: 10px;
      }
    }
  }
`;

export default StyledModal;
