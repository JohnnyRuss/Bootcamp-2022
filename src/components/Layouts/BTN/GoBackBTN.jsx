import { useNavigate } from 'react-router-dom';
import styles from './goBackBTN.module.scss';

function GoBackBTN({ path }) {
  const navigate = useNavigate();

  function handleNavigateBack() {
    navigate(path || -1);
  }

  return (
    <button className={styles.goBackBtn} onClick={handleNavigateBack}>
      <figure>
        <img src='/assets/arrow-back.svg' alt='route back button icon' />
      </figure>
    </button>
  );
}

export default GoBackBTN;
