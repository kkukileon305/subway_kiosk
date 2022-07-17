import styled from 'styled-components';
import TakeoutModal from '../components/TakeoutModal';
import { MAIN_COLOR } from '../theme';
import Button from '../components/Button';
import { useState } from 'react';

const IntroMain = styled.main`
  height: 100%;
`;
const Home = () => {
  const [takeoutModal, setTakeoutModal] = useState(true);

  return (
    <IntroMain>
      <TakeoutModal
        takeoutModal={takeoutModal} //
        setTakeoutModal={setTakeoutModal}
      />
    </IntroMain>
  );
};

export default Home;
