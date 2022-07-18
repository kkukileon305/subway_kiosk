import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100vw;
`;

const MenuList = ({ menuData: { sand, wrap, salad, breakfast, smlie, group }, menuData }) => {
  const [menuName, setMenuName] = useState([]);

  useEffect(() => {
    setMenuName(Object.keys(menuData));
    console.log(menuName);
  }, [menuData]);

  return (
    <StyledDiv>
      <ul></ul>
    </StyledDiv>
  );
};

export default MenuList;
