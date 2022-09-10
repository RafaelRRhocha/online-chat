// import Image from 'next/image';
import type { FC } from 'react';

// import readingGif from '../../../public/images/readingGif.gif';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <>
      {/* <Image height="100px" width="30px" src={readingGif} alt="reading" /> */}
      <p>Home page</p>
    </>
  );
}

export default HomePage;