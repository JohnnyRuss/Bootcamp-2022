import { uid } from 'uid';

import styles from './productsList.module.scss';
import { GoBackBTN, PageTitle } from '../Layouts';
import Card from './components/Card';

const prList = [
  {
    author: 'ავტორი',
    pc: 'lenovo thinkpad',
    id: '1',
    img: 'https://www.howtogeek.com/wp-content/uploads/2022/04/e14-hero-3.jpg?height=200p&trim=2,2,2,2',
  },
  {
    author: 'ავტორი',
    pc: 'lenovo thinkpad',
    id: '2',
    img: 'https://www.howtogeek.com/wp-content/uploads/2022/04/e14-hero-3.jpg?height=200p&trim=2,2,2,2',
  },
  {
    author: 'ავტორი',
    pc: 'lenovo thinkpad',
    id: '3',
    img: 'https://www.howtogeek.com/wp-content/uploads/2022/04/e14-hero-3.jpg?height=200p&trim=2,2,2,2',
  },
  {
    author: 'ავტორი',
    pc: 'lenovo thinkpad',
    id: '4',
    img: 'https://www.howtogeek.com/wp-content/uploads/2022/04/e14-hero-3.jpg?height=200p&trim=2,2,2,2',
  },
  {
    author: 'ავტორი',
    pc: 'lenovo thinkpad',
    id: '5',
    img: 'https://www.howtogeek.com/wp-content/uploads/2022/04/e14-hero-3.jpg?height=200p&trim=2,2,2,2',
  },
  {
    author: 'ავტორი',
    pc: 'lenovo thinkpad',
    id: '6',
    img: 'https://www.howtogeek.com/wp-content/uploads/2022/04/e14-hero-3.jpg?height=200p&trim=2,2,2,2',
  },
  {
    author: 'ავტორი',
    pc: 'lenovo thinkpad',
    id: '7',
    img: 'https://www.howtogeek.com/wp-content/uploads/2022/04/e14-hero-3.jpg?height=200p&trim=2,2,2,2',
  },
  {
    author: 'ავტორი',
    pc: 'lenovo thinkpad',
    id: '8',
    img: 'https://www.howtogeek.com/wp-content/uploads/2022/04/e14-hero-3.jpg?height=200p&trim=2,2,2,2',
  },
  {
    author: 'ავტორი',
    pc: 'lenovo thinkpad',
    id: '9',
    img: 'https://www.howtogeek.com/wp-content/uploads/2022/04/e14-hero-3.jpg?height=200p&trim=2,2,2,2',
  },
  {
    author: 'ავტორი',
    pc: 'lenovo thinkpad',
    id: '10',
    img: 'https://www.howtogeek.com/wp-content/uploads/2022/04/e14-hero-3.jpg?height=200p&trim=2,2,2,2',
  },
  {
    author: 'ავტორი',
    pc: 'lenovo thinkpad',
    id: '11',
    img: 'https://www.howtogeek.com/wp-content/uploads/2022/04/e14-hero-3.jpg?height=200p&trim=2,2,2,2',
  },
  {
    author: 'ავტორი',
    pc: 'lenovo thinkpad',
    id: '12',
    img: 'https://www.howtogeek.com/wp-content/uploads/2022/04/e14-hero-3.jpg?height=200p&trim=2,2,2,2',
  },
];

function ProductsList() {
  return (
    <>
      <GoBackBTN path='/' />
      <div className={styles.notesContainer}>
        <PageTitle title='ჩანაწერების სია' />
        <div className={styles.notesList}>
          {prList.map((pr) => (
            <Card key={uid(6)} pr={pr} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
