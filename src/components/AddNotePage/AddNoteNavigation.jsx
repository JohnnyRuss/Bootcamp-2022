import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FormContext } from '../../store/FormProvider';

import styles from './styles/addNoteNavigation.module.scss';

function AddNoteNavigation() {
  const { validCollaborator } = useContext(FormContext);
  const { pathname } = useLocation();

  return (
    <nav className={styles.addNoteNav}>
      <ul className={styles.addNoteNavList}>
        <li
          className={`${styles.addNoteNavListItem} ${
            pathname.includes('collaborator-info') ? styles.addNoteNavListItemActive : ''
          }`}>
          <Link to='collaborator-info'>თანამშრომლის ინფო</Link>
          <p className={styles.pageCounter}>1/2</p>
        </li>
        <li
          className={`${styles.addNoteNavListItem} ${
            pathname.includes('pc-info') ? styles.addNoteNavListItemActive : ''
          } ${!validCollaborator ? styles.disabled : ''}`}>
          <Link to={validCollaborator ? 'pc-info' : pathname}>ლეპტოპის მახასიათებლები</Link>
          <p className={styles.pageCounter}>2/2</p>
        </li>
      </ul>
    </nav>
  );
}

export default AddNoteNavigation;
