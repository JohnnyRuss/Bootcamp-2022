import { useEffect, useState } from 'react';
import { useAxios } from '../../../hooks';
import styles from './innerGrids.module.scss';

function LaptopInfo({ data }) {
  const { data: brands } = useAxios('getQuery', { path: 'brands' });
  const [brand, setBrand] = useState('');

  useEffect(() => {
    if (!brands || !data) return;
    const br = brands.find((br) => br.id === data.laptop.brand_id);
    setBrand(br.name);
  }, [brands, data]);

  return (
      <div className={styles.pcDetails}>
        <div className={styles['inner-grid']}>
          <p className={styles['inner-grid__keys']}>ლეპტოპის სახელი:</p>
          <p className={styles['inner-grid__values']}>{data.laptop.name}</p>
          <p className={styles['inner-grid__keys']}>ლეპტოპის ბრენდი:</p>
          <p className={styles['inner-grid__values']}>{brand}</p>
          <p className={styles['inner-grid__keys']}>RAM:</p>
          <p className={styles['inner-grid__values']}>{data.laptop.ram}</p>
          <p className={styles['inner-grid__keys']}>მეხსიერების ტიპი:</p>
          <p className={styles['inner-grid__values']}>{data.laptop.hard_drive_type}</p>
        </div>
        <div className={styles['inner-grid']}>
          <p className={styles['inner-grid__keys']}>CPU:</p>
          <p className={styles['inner-grid__values']}>{data.laptop.cpu.name}</p>
          <p className={styles['inner-grid__keys']}>CPU_ს ბირთვი:</p>
          <p className={styles['inner-grid__values']}>{data.laptop.cpu.cores}</p>
          <p className={styles['inner-grid__keys']}>CPU_ს ნაკადი:</p>
          <p className={styles['inner-grid__values']}>{data.laptop.cpu.threads}</p>
        </div>
      </div>
  );
}

export default LaptopInfo;
