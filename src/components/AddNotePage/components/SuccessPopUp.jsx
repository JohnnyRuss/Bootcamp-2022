import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles/successPopUp.module.scss';
import { PrimaryButton } from '../../Layouts';

function SuccessPopUp() {
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';

    return () => (body.style.overflow = 'scroll');
  }, []);

  return (
    <div className={styles.popUp}>
      <div className={styles.popUpWindow}>
        <figure className={styles.popUpWindowFig}>
          <img src='/assets/success.svg' alt='success' />
        </figure>
        <p className={styles.successMsg}>ჩანაწერი დამატებულია!</p>
        <Link to='/note-list'>
          <PrimaryButton className={`${styles.btn} ${styles.listBtn}`}>
            სიაში გადაყვანა
          </PrimaryButton>
        </Link>
        <Link to='/'>
          <PrimaryButton className={`${styles.btn} ${styles.mainBtn}`}>მთავარი</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}

export default SuccessPopUp;
