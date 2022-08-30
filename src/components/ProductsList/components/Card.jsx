import { Link } from 'react-router-dom';
import styles from './card.module.scss';

function Card({ pr }) {
  return (
    <div className={styles.noteItem}>
      <figure className={styles.noteFig}>
        <img src={`https://pcfy.redberryinternship.ge/${pr.laptop.image}`} alt='product' />
      </figure>
      <div className={styles.noteDetails}>
        <p className={styles.author}>{`${pr.user.name} ${pr.user.surname}`}</p>
        <p>{pr.laptop.name}</p>
        <Link to={`${pr.laptop.id}`} state={{ key: pr.laptop.id }}>
          <button className={styles.moreBtn}>მეტის ნახვა</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
