import type { FC } from 'react';
import Layout from '../components/Layout';

interface settingsProps {}

const settings: FC<settingsProps> = ({}) => {
  return (
    <Layout title="Settings" subtitle="Tela de Settings aq"/>
  );
}

export default settings;