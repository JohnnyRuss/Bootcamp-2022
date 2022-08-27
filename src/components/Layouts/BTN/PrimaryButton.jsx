import styles from './primaryButton.module.scss';

function PrimaryButton({ children, className }) {
  return <button className={`${styles.primaryBtn} ${className || ''}`}>{children}</button>;
}

export default PrimaryButton;
