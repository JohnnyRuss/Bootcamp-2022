import styles from './pageTitle.module.scss';

function PageTitle({ title }) {
  return <p className={styles.pageTitle}>{title}</p>;
}

export default PageTitle;
