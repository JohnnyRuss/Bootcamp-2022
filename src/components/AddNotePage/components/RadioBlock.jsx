import styles from './radioBlock.module.scss';
import RadioInput from './RadioInput';
import { uid } from 'uid';

function RadioBlock({ caption, name, radios, onChange, valid, userValue }) {
  return (
    <div className={styles.radioFields}>
      <p className={`${styles.radioCaption} ${valid.error ? styles.invalid : ''}`}>{caption}</p>
      <fieldset className={styles.horizontalDevider}>
        {radios.map((rad) => (
          <RadioInput
            key={uid(6)}
            label={rad.label}
            id={rad.id}
            value={rad.value}
            checked={userValue === rad.value}
            name={name}
            onChange={onChange}
          />
        ))}
      </fieldset>
    </div>
  );
}

export default RadioBlock;
