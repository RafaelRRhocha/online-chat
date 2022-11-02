import type { FC } from 'react';
import Layout from '../components/templates/Layout';

interface profileProps {}

const profile: FC<profileProps> = ({}) => {
  return (
    <Layout title="Seu Perfil" subtitle="Veja suas informações abaixo" profilePageOn />
  );
}

export default profile;