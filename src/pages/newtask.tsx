import type { FC } from 'react';
import Layout from '../components/Layout';

interface newtaskProps {}

const newtask: FC<newtaskProps> = ({}) => {
  return (
    <Layout title="Criar Tarefa" subtitle="Tela de Criar Tarefas Aq"/>
  );
}

export default newtask;