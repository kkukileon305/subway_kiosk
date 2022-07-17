import styled from 'styled-components';
import { MAIN_COLOR } from '../theme';

const Button = styled.button`
  width: ${({ width }) => (width ? width : 100)}px;
  height: ${({ height }) => (height ? height : 100)}px;
  background-color: ${MAIN_COLOR};
  border: none;
  font-size: 20px;
  font-weight: 800;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;

export default Button;
