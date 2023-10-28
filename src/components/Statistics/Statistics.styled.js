import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fff;
  width: 1020px;
  height: ${({ title }) => (title ? '400px' : '200px')};
`;

export const Title = styled.h2`
  padding-top: 40px;
  color: #737a7f;
  text-transform: uppercase;
  font-weight: 500;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  li {
    border: 2px #e5eaf1 solid;
    width: 200px;
    height: 200px;
  }

  span {
    display: flex;
    justify-content: center;
    font-size: 35px;
    color: #fff;
  }

  span.label {
    margin-top: 40px;
  }

  span.percentage {
    margin-top: 20px;
    font-weight: 700;
    font-size: 45px;
  }
`;
