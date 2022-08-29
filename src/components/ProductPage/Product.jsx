import styles from './product.module.scss';
import UserInfo from './components/UserInfo';
import LaptopInfo from './components/LaptopInfo';
import ExtraInfo from './components/ExtraInfo';
import { GoBackBTN, PageTitle } from '../Layouts';

const prod = {
  img: 'https://www.howtogeek.com/wp-content/uploads/2022/04/e14-hero-3.jpg?height=200p&trim=2,2,2,2',
  name: 'ავტორი',
  team: 'დიზაინერები',
  position: 'ილუსტრატორი',
  email: 'user@redberry.ge',
  phoneNumber: '+995 511 11 00 22',
  laptopName: 'Thinkpad',
  laptopBrand: 'Lenovo',
  laptopRam: '16',
  laptopHardDriveType: 'SSD',
  laptopCpu: 'intel 5',
  laptopCpuCores: '13',
  laptopCpuThreads: '67',
  laptopState: 'მეორადი',
  laptopPrice: '1500',
};

function Product() {
  return (
    <>
      <GoBackBTN />
      <div className={styles.productContainer}>
        <PageTitle title='ლეპტოპის ინფო' />
        <div className={styles.detailsBox}>
          <figure className={styles.productFig}>
            <img src={prod.img} alt='product' />
          </figure>
          <UserInfo prod={prod} />
          <hr className={styles['hr-1']} />
          <LaptopInfo prod={prod} />
          <hr className={styles['hr-2']} />
          <ExtraInfo prod={prod} />
        </div>
      </div>
    </>
  );
}

export default Product;
