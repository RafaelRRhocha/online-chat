import type { FC } from 'react';
import * as styles from './styles';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <>
      <p className={ styles.textHome }>
        Home Page
      </p>
    </>
  );
}

export default HomePage;