import styles from './radioInput.module.scss';

function RadioInput({ id, label, name, value, onChange, checked }) {
  return (
    <div className={styles.checkBoxField}>
      <input
        type='radio'
        id={id}
        radioGroup={name}
        className={styles.checkBox}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioInput;
