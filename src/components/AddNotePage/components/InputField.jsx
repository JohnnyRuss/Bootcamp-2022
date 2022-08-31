import { memo } from 'react';
import styles from './inputField.module.scss';

function InputField({
  type = 'text',
  id,
  label,
  hint,
  name,
  value,
  valid,
  onChange,
  onFocus,
  onBlur,
  col,
}) {
  return (
    <div
      className={`${styles.formField} ${styles[`col-${col}`]} ${
        valid?.error ? styles.invalid : valid?.valid ? styles.valid : ''
      }`}>
      <label htmlFor={id} className={styles.inpLabel}>
        {label}
      </label>
      <div
        className={`${styles.inpWrapper} 
        
        `}>
        <input
          type={type}
          id={id}
          className={styles.inp}
          name={name}
          onChange={onChange}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
      <span className={styles.hint}>{valid?.error ? valid.message : hint}</span>
    </div>
  );
}

export default memo(InputField);
