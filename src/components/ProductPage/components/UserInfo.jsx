import { useEffect, useState } from 'react';
import { useAxios } from '../../../hooks';

import styles from './innerGrids.module.scss';

function UserInfo({ data }) {
  const { data: selectOptions } = useAxios('getAllQuery', { paths: ['teams', 'positions'] });
  const [team, setTeam] = useState('');
  const [position, setPosition] = useState('');

  useEffect(() => {
    if (!selectOptions || !data) return;
    const tm = selectOptions.teams.find((tm) => tm.id === data.user.team_id);
    const pos = selectOptions.positions.find((pos) => pos.id === data.user.position_id);
    setTeam(tm.name);
    setPosition(pos.name);
  }, [selectOptions, data]);

  return (
    <div className={`${styles['inner-grid']} ${styles.userDetails}`}>
      <p className={styles['inner-grid__keys']}>სახელი:</p>
      <p className={styles['inner-grid__values']}>{data.user.name}</p>
      <p className={styles['inner-grid__keys']}>თიმი:</p>
      <p className={styles['inner-grid__values']}>{team}</p>
      <p className={styles['inner-grid__keys']}>პოზიცია:</p>
      <p className={styles['inner-grid__values']}>{position}</p>
      <p className={styles['inner-grid__keys']}>მეილი:</p>
      <p className={styles['inner-grid__values']}>{data.user.email}</p>
      <p className={styles['inner-grid__keys']}>ტელ.ნომერი:</p>
      <p className={styles['inner-grid__values']}>{data.user.phone_number}</p>
    </div>
  );
}

export default UserInfo;
