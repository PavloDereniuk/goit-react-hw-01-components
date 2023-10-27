import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #ffffff;
  width: 600px;
  height: 650px;
  border-radius: 10px;
`;

export const Description = styled.div`
  margin-top: 40px;
  text-align: center;

  p.name {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p.tag,
  p.location {
    color: #b1b9c2;
    font-size: 35px;
    margin-bottom: 10px;
  }
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #907869;
`;

export const List = styled.ul`
  display: flex;
  width: 600px;
  justify-content: center;
  align-items: flex-end;

  li {
    border: 2px #e5eaf1 solid;
    width: 200px;
    height: 200px;
    background-color: #f3f6f9;
  }

  span {
    display: flex;
    justify-content: center;
    font-size: 35px;
  }

  span.label {
    margin-top: 40px;
    color: #b1b9c2;
  }

  span.quantity {
    margin-top: 10px;
    font-weight: 700;
  }
`;
