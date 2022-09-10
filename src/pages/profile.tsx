import type { FC } from 'react';
import Layout from '../components/Layout';

interface profileProps {}

const profile: FC<profileProps> = ({}) => {
  return (
    <Layout title="Your Profile" subtitle="Tela de Profile" profilePageOn />
  );
}
export default profile;