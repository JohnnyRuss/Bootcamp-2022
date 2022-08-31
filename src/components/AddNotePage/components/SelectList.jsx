import { uid } from 'uid';
import styles from "./styles/selectList.module.scss"

function SelectList({ list, name, handleSelect }) {
  return (
    <ul className={`${styles.selectFieldList}`}>
      {list.map((item) => (
        <li
          key={uid(6)}
          name={name}
          className={styles.selectFieldListItem}
          onClick={() => handleSelect(name, item.id, item?.name)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default SelectList;
