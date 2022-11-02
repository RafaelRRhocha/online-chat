import type { FC } from 'react';
import * as styles from './styles';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <>
      <p className={ styles.textHome }>
        ***Em Desenvolvimento***
      </p>
    </>
  );
}

export default HomePage;