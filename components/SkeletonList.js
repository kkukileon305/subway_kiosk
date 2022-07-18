import styled from 'styled-components';

const StyledSkeleton = styled.div`
  width: 100%;

  div.menuName {
    width: 100px;
    height: 30px;
    background-color: lightgray;
    margin-left: 35px;
    margin-top: 30px;
  }

  ul {
    width: 100%;

    li {
      width: 100%;
      height: 150px;
      background-color: white;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 30px;
      padding-left: 35px;

      div.circle {
        width: 120px;
        height: 100px;
        background-color: lightgray;
      }

      div.right {
        width: 200px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 30px;

        div.krName {
          width: 150px;
          height: 20px;
          background-color: lightgray;
        }
        div.enName {
          width: 130px;
          height: 16px;
          background-color: lightgray;
        }
      }
    }
  }
`;

const SkeletonList = () => (
  <StyledSkeleton>
    <div className='menuName'></div>
    <ul>
      <li>
        <div className='circle'></div>
        <div className='right'>
          <div className='krName'></div>
          <div className='enName'></div>
        </div>
      </li>
      <li>
        <div className='circle'></div>
        <div className='right'>
          <div className='krName'></div>
          <div className='enName'></div>
        </div>
      </li>
      <li>
        <div className='circle'></div>
        <div className='right'>
          <div className='krName'></div>
          <div className='enName'></div>
        </div>
      </li>
      <li>
        <div className='circle'></div>
        <div className='right'>
          <div className='krName'></div>
          <div className='enName'></div>
        </div>
      </li>
      <li>
        <div className='circle'></div>
        <div className='right'>
          <div className='krName'></div>
          <div className='enName'></div>
        </div>
      </li>
    </ul>
  </StyledSkeleton>
);

export default SkeletonList;
