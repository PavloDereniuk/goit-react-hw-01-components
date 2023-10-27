import styled from 'styled-components';

export const Container = styled.table`
  width: 1500px;
  text-align: center;

  thead tr th {
    background-color: #00bcd5;
    color: #fff;
  }

  tr {
    height: 100px;
    background-color: #ecf1f3;
  }

  td,
  th {
    border: 1px #a6a7a7 solid;
    color: #77777b;
  }

  tr.lines:nth-child(odd) {
    background-color: #fff;
  }

  td.type::first-letter {
    text-transform: uppercase;
  }
`;
