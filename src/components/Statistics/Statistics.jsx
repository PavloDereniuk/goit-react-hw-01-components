export const Statistics = ({title, stats}) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map(data => {
          return (
            <li key={data.id} className="item">
              <span className="label">{data.label}</span>
              <span className="percentage">{data.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}