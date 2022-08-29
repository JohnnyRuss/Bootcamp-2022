import styles from './innerGrids.module.scss';

function ExtraInfo({ prod }) {
  return (
    <>
      <div className={styles['inner-grid']}>
        <p className={styles['inner-grid__keys']}>ლეპტოპის მდგომარეობა:</p>
        <p className={styles['inner-grid__values']}>{prod.laptopState}</p>
        <p className={styles['inner-grid__keys']}>ლეპტოპის ფასი:</p>
        <p className={styles['inner-grid__values']}>{prod.laptopPrice}</p>
      </div>
      <div className={styles['inner-grid']}>
        <p className={styles['inner-grid__keys']}>შევსების რიცხვი:</p>
        <p className={styles['inner-grid__values']}>12/12/12</p>
      </div>
    </>
  );
}

export default ExtraInfo;
