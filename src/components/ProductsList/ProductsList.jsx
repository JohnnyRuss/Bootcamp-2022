import { uid } from 'uid';
import { useAxios } from '../../hooks';

import styles from './productsList.module.scss';
import { GoBackBTN, PageTitle, Spinner } from '../Layouts';
import Card from './components/Card';

function ProductsList() {
  const { data, loading } = useAxios('getQuery', { path: 'laptops', withToken: true });

  return (
    <>
      <GoBackBTN path='/' />
      <div className={styles.notesContainer}>
        <PageTitle title='ჩანაწერების სია' />
        {loading && <Spinner />}
        {!loading && data && (
          <div className={styles.notesList}>
            {data.map((pr) => (
              <Card key={uid(6)} pr={pr} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default ProductsList;
