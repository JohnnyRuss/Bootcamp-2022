import { Link } from 'react-router-dom';
import styles from './card.module.scss';

function Card({ pr }) {
  return (
    <div className={styles.noteItem}>
      <figure className={styles.noteFig}>
        <img src={pr.img} alt='product' />
      </figure>
      <div className={styles.noteDetails}>
        <p className={styles.author}>{pr.author}</p>
        <p>{pr.pc}</p>
        <Link to={pr.id}>
          <button className={styles.moreBtn}>მეტის ნახვა</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
