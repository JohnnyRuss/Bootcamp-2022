import { useState } from 'react';

import styles from './selectField.module.scss';
import SelectBTN from './SelectBTN';
import SelectList from './SelectList';

function SelectField({ col, label, list, onSelect, value, onBlur, onFocus, valid, name }) {
  const [openSelect, setOpenSelect] = useState(false);

  function handleSelect(name, item, targetName) {
    onSelect(name, item, targetName);
    setOpenSelect(false);
    onBlur();
  }

  return (
    <div className={`${styles.selectField}  ${styles[`col-${col}`]} `}>
      <SelectBTN
        openSelect={openSelect}
        setOpenSelect={setOpenSelect}
        onBlur={onBlur}
        onFocus={onFocus}
        list={list}
        value={value}
        label={label}
        valid={valid}
      />
      {openSelect && list[0] && <SelectList list={list} name={name} handleSelect={handleSelect} />}
      {openSelect && !list[0] && <p>გთხოვთ მიუთითეთ თიმი</p>}
    </div>
  );
}

export default SelectField;
