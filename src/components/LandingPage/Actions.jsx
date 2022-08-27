import styles from "./styles/actions.module.scss"
import { PrimaryButton } from '../Layouts';

function Actions() {
  return (
    <div className={styles.landingActions}>
      <PrimaryButton className={styles.actionsBtn}>ჩანაწერის დამატება</PrimaryButton>
      <PrimaryButton className={styles.actionsBtn}>ჩანაწერების სია</PrimaryButton>
    </div>
  );
}

export default Actions;
