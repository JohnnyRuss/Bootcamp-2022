import { useState } from 'react';
import styles from './styles/statePopUp.module.scss';

function StatePopUp({ loading, error }) {
  const [closePopUp, setClosePopUp] = useState(true);

  return (
    (loading || error) &&
    closePopUp && (
      <div className={styles.statePopUp} onClick={() => setClosePopUp(false)}>
        {loading ? (
          'loading...'
        ) : error ? (
          <>
            <img src='/assets/error-icon.svg' alt='error icon' />
            ბოდიშს გიხდით ტექნიკური შეფერხებისთვის, გთხოვთ სცადოთ მოგვიანებით{' '}
          </>
        ) : (
          ''
        )}
      </div>
    )
  );
}

export default StatePopUp;
