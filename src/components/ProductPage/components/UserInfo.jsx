import styles from './innerGrids.module.scss';

function UserInfo({prod}) {
  return (
    <div className={styles['inner-grid']}>
      <p className={styles['inner-grid__keys']}>სახელი:</p>
      <p className={styles['inner-grid__values']}>{prod.name}</p>
      <p className={styles['inner-grid__keys']}>თიმი:</p>
      <p className={styles['inner-grid__values']}>{prod.team}</p>
      <p className={styles['inner-grid__keys']}>პოზიცია:</p>
      <p className={styles['inner-grid__values']}>{prod.position}</p>
      <p className={styles['inner-grid__keys']}>მეილი:</p>
      <p className={styles['inner-grid__values']}>{prod.email}</p>
      <p className={styles['inner-grid__keys']}>ტელ.ნომერი:</p>
      <p className={styles['inner-grid__values']}>{prod.phoneNumber}</p>
    </div>
  );
}

export default UserInfo;
