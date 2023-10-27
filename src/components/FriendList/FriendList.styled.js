import styled from 'styled-components';

// const friendStatus = ({friends}) => {
//     friend.isOnline ? #1bd93e : #d91b1b
// }

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;

  li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-width: 600px;
    min-height: 200px;
    border: 4px #fff solid;
    box-shadow: 10px 5px 5px #b3b3b3;
    background-color: #fff;
  }

  li .avatar {
    width: 150px;
    height: 150px;
    margin-left: 50px;
  }

  p {
    margin-left: 100px;
    font-weight: 700;
  }
`;

export const Status = styled.span`
  margin-left: 30px;
  width: 40px;
  height: 40px;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
  border-radius: 50%;
`;
