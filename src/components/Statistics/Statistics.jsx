import styles from './Statistics.module.css';

export const Statistics = ({ title, stats = [] }) => {
  const data = stats.map(({ id, label, percentage }) => (
    <li key={id} className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage} %</span>
    </li>
  ));
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>{data}</ul>
    </section>
  );
};
