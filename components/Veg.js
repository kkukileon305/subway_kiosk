import Image from 'next/image';
import styled from 'styled-components';
import { vegData } from '../data';
import { MAIN_COLOR } from '../theme';

const StyledVeg = styled.ul`
  width: 260px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 20px;

  li {
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
  }
`;

const Veg = ({ vegHandler }) => (
  <StyledVeg>
    {vegData.map((e, i) => (
      <li key={i}>
        <button onClick={(ev) => vegHandler(ev, e.name)}>
          <Image src={e.url} alt='veg' width={130} height={100} />
          <p>{e.name}</p>
        </button>
      </li>
    ))}
  </StyledVeg>
);

export default Veg;
