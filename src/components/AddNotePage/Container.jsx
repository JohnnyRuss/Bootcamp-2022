import styles from './styles/container.module.scss';
import { GoBackBTN } from '../Layouts';

function Container({ children }) {
  return (
    <div className={styles.addNoteContainerWrapper}>
      <GoBackBTN />
      <div className={styles.addNoteContainer}>{children}</div>
      <figure className={styles.logoRound}>
        <img src='/assets/logo-round.svg' alt='logo' />
      </figure>
    </div>
  );
}

export default Container;
