import { Link } from 'react-router-dom';
import styles from './card.module.scss';

function Card({ pr }) {
  const API_END_POINT_ROOT = process.env.REACT_APP_API_END_POINT_ROOT;

  return (
    <div className={styles.noteItem}>
      <figure className={styles.noteFig}>
        <img src={`${API_END_POINT_ROOT}${pr.laptop.image}`} alt='product' loading='lazy' />
      </figure>
      <div className={styles.noteDetails}>
        <p className={styles.author}>{`${pr.user.name} ${pr.user.surname}`}</p>
        <p className={styles.pcName}>{pr.laptop.name}</p>
        <Link to={`${pr.laptop.id}`} state={{ key: pr.laptop.id }}>
          <button className={styles.moreBtn}>მეტის ნახვა</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
