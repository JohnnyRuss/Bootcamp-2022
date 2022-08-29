import { useState } from 'react';
import { uid } from 'uid';

import styles from './selectField.module.scss';

function SelectField({ col, label, list, onSelect, value, onBlur, onFocus, valid, name }) {
  const [openSelect, setOpenSelect] = useState(false);

  function handleSelect(name, item) {
    onSelect(name, item);
    setOpenSelect(false);
    onBlur();
  }

  return (
    <div className={`${styles.selectField}  ${styles[`col-${col}`]} `}>
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
        <span>{value || label}</span>
        <figure>
          <img src='/assets/select-arrow.svg' alt='select button icon' />
        </figure>
      </button>
      {openSelect && (
        <ul className={`${styles.selectFieldList}`}>
          {list.map((item) => (
            <li
              key={uid(6)}
              name={name}
              className={styles.selectFieldListItem}
              onClick={() => handleSelect(name, item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SelectField;
