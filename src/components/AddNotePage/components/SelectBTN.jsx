import styles from './selectBtn.module.scss';

function SelectBTN({ openSelect, setOpenSelect, onBlur, onFocus, list, value, label, valid }) {
  return (
    <button
      className={`${styles.selectBtn} ${openSelect ? styles.active : ''} ${
        valid?.error ? styles.invalid : valid?.valid ? styles.valid : ''
      }`}
      onClick={(e) => {
        e.preventDefault();
        if (openSelect) onBlur();
        setOpenSelect((prev) => !prev);
      }}
      onFocus={onFocus}>
      <span className={valid?.valid ? '' : styles.default}>
        {list.find((item) => item.id === value)?.name || label}
      </span>
      <figure>
        <img src='/assets/select-arrow.svg' alt='select button icon' />
      </figure>
    </button>
  );
}

export default SelectBTN;
