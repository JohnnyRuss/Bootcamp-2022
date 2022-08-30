import { Link } from 'react-router-dom';

import styles from './styles/successPopUp.module.scss';
import { PrimaryButton } from '../Layouts';

function SuccessPopUp() {
  return (
    <div className={styles.popUp}>
      <div className={styles.popUpWindow}>
        <figure className={styles.popUpWindowFig}>
          <img src='/assets/success.svg' alt='success' />
        </figure>
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
