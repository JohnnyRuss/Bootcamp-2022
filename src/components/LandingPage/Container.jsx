import styles from './styles/container.module.scss';

function Container({ children }) {
  return <div className={styles.landingContainer}>{children}</div>;
}

export default Container;
