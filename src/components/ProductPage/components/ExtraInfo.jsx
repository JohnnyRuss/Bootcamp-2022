import styles from './innerGrids.module.scss';

function ExtraInfo({ data }) {
  return (
    <div className={styles.extraInfo}>
      <div className={styles['inner-grid']}>
        <p className={styles['inner-grid__keys']}>ლეპტოპის მდგომარეობა:</p>
        <p className={styles['inner-grid__values']}>
          {data.laptop.state === 'used' ? 'მეორადი' : 'ახალი'}
        </p>
        <p className={styles['inner-grid__keys']}>ლეპტოპის ფასი:</p>
        <p className={styles['inner-grid__values']}>{data.laptop.price}</p>
      </div>
      <div className={styles['inner-grid']}>
        <p className={styles['inner-grid__keys']}>შეძენის რიცხვი:</p>
        <p className={styles['inner-grid__values']}>{data.laptop?.purchase_date}</p>
      </div>
    </div>
  );
}

export default ExtraInfo;
