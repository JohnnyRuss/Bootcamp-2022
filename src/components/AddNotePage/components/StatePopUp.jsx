import { useState, useEffect } from 'react';

import { useScrollRestriction } from '../../../hooks';

import styles from './styles/statePopUp.module.scss';

function StatePopUp({ error, loading }) {
  const [activePopUp, setActivePopUp] = useState(true);
  useScrollRestriction(activePopUp);

  useEffect(() => {
    if (!activePopUp && loading) setActivePopUp(true);
  }, [loading, activePopUp]);

  return (
    activePopUp && (
      <div className={styles.stateBackdrop} onClick={() => !loading && setActivePopUp(false)}>
        <div className={styles.statePopUp}>
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
      </div>
    )
  );
}

export default StatePopUp;
