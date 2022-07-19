import styled from 'styled-components';
import { MAIN_COLOR } from '../theme';

const StyledMain = styled.main`
  overflow: hidden;
  width: 100%;
  height: ${({ scrollalbe }) => (scrollalbe ? 'fit-content' : 'calc(100% - 36px)')};
`;

export default StyledMain;
