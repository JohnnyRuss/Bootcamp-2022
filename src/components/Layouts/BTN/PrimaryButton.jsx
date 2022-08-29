import styles from './primaryButton.module.scss';

function PrimaryButton({ children, className, onClick, disabled }) {
  return (
    <button
      className={`${styles.primaryBtn} ${className || ''}`}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
}

export default PrimaryButton;
