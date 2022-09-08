import type { FC } from 'react';
import Layout from '../components/Layout';

interface mytasksProps {}

const mytasks: FC<mytasksProps> = ({}) => {
  return (
    <Layout title="Minhas Tarefas" subtitle="Aqui você encontra as suas tarefas" />
  );
}

export default mytasks;