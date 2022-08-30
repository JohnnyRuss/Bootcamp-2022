import { useLocation } from 'react-router-dom';
import { useAxios } from '../../hooks';

import styles from './product.module.scss';
import UserInfo from './components/UserInfo';
import LaptopInfo from './components/LaptopInfo';
import ExtraInfo from './components/ExtraInfo';
import { GoBackBTN, PageTitle, Spinner } from '../Layouts';

function Product() {
  //prettier-ignore
  const {state: { key }} = useLocation();

  const { data, loading } = useAxios('getQuery', {
    path: 'laptop',
    id: key,
    withToken: true,
  });

  return (
    <>
      <GoBackBTN />
      <div className={styles.productContainer}>
        <PageTitle title='ლეპტოპის ინფო' />
        {loading && <Spinner />}
        {!loading && data && (
          <div className={styles.detailsBox}>
            <figure className={styles.productFig}>
              <img src={`https://pcfy.redberryinternship.ge/${data.laptop.image}`} alt='product' />
            </figure>
            <UserInfo data={data} />
            <hr className={styles['hr-1']} />
            <LaptopInfo data={data} />
            <hr className={styles['hr-2']} />
            <ExtraInfo data={data} />
          </div>
        )}
      </div>
    </>
  );
}

export default Product;
