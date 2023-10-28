import { Container, List, Title } from './Statistics.styled';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const Statistics = ({ title, stats }) => {
  return (
    <Container title={title}>
      {title ? <Title>{title}</Title> : false}
      <List >
        {stats.map(data => {
          return (
            <li
              key={data.id}
              className="item"
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className="label">{data.label}</span>
              <span className="percentage">{data.percentage}%</span>
            </li>
          );
        })}
      </List>
    </Container>
  );
};
