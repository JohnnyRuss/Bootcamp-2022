import { Link } from 'react-router-dom';
import styles from './styles/actions.module.scss';
import { PrimaryButton } from '../Layouts';

function Actions() {
  return (
    <div className={styles.landingActions}>
      <Link to='add-note/collaborator-info'>
        <PrimaryButton className={styles.actionsBtn}>ჩანაწერის დამატება</PrimaryButton>
      </Link>
      <Link to='/note-list'>
        <PrimaryButton className={styles.actionsBtn}>ჩანაწერების სია</PrimaryButton>
      </Link>
    </div>
  );
}

export default Actions;
