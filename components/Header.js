import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import { MAIN_COLOR } from '../theme';

const StyledHeader = styled.header`
  background-color: ${MAIN_COLOR};
  padding: 8px 14px;
  position: relative;

  h1 {
    position: absolute;
    font-weight: 700;
    color: white;
    width: 100%;
    left: 0;
    top: 10px;
    text-align: center;
  }

  ul {
    display: flex;
    justify-content: flex-end;
    gap: 20px;

    li {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
`;

const Header = ({ setTakeoutModal }) => {
  return (
    <StyledHeader>
      <h1>SUBBWAY</h1>
      <ul>
        <li onClick={() => setTakeoutModal(true)}>
          <AiOutlineHome size={20} color='white' />
        </li>
      </ul>
    </StyledHeader>
  );
};

export default Header;
