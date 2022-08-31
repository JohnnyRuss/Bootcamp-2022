import styles from './styles/datePicker.module.scss';

function DatePicker({ handleField, pcData }) {
  return (
    <input
      type='date'
      className={styles.datePicker}
      defaultValue={pcData?.laptopPurchaseDate || ''}
      name='laptopPurchaseDate'
      onChange={(e) => handleField(e.target)}
    />
  );
}

export default DatePicker;
