import { Link } from 'react-router-dom';
import styles from './styles/actions.module.scss';
import { PrimaryButton } from '../Layouts';

function Actions() {
  return (
    <div className={styles.landingActions}>
      <Link to='add-note/collaborator-info'>
        <PrimaryButton className={styles.actionsBtn}>ჩანაწერის დამატება</PrimaryButton>
      </Link>
      <PrimaryButton className={styles.actionsBtn}>ჩანაწერების სია</PrimaryButton>
    </div>
  );
}

export default Actions;
