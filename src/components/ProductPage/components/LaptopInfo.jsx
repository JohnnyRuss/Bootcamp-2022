import styles from './innerGrids.module.scss';

function LaptopInfo({ prod }) {
  return (
    <>
      <div className={styles['inner-grid']}>
        <p className={styles['inner-grid__keys']}>ლეპტოპის სახელი:</p>
        <p className={styles['inner-grid__values']}>{prod.laptopName}</p>
        <p className={styles['inner-grid__keys']}>ლეპტოპის ბრენდი:</p>
        <p className={styles['inner-grid__values']}>{prod.laptopBrand}</p>
        <p className={styles['inner-grid__keys']}>RAM:</p>
        <p className={styles['inner-grid__values']}>{prod.laptopRam}</p>
        <p className={styles['inner-grid__keys']}>მეხსიერების ტიპი:</p>
        <p className={styles['inner-grid__values']}>{prod.laptopHardDriveType}</p>
      </div>
      <div className={styles['inner-grid']}>
        <p className={styles['inner-grid__keys']}>CPU:</p>
        <p className={styles['inner-grid__values']}>{prod.laptopCpu}</p>
        <p className={styles['inner-grid__keys']}>CPU_ს ბირთვი:</p>
        <p className={styles['inner-grid__values']}>{prod.laptopCpuCores}</p>
        <p className={styles['inner-grid__keys']}>CPU_ს ნაკადი:</p>
        <p className={styles['inner-grid__values']}>{prod.laptopCpuThreads}</p>
      </div>
    </>
  );
}

export default LaptopInfo;
