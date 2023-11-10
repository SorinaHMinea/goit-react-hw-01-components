import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.item}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
