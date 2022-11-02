import type { NextPage } from 'next';
import Layout from '../components/templates/Layout';
import { useAuth } from '../data/hook/useAuth';

const Home: NextPage = () => {
  const { user } = useAuth();
  return (
    <>
      <Layout title={`Olá! ${user?.name ?? 'Usuário(a)'}!`} subtitle="Seja Bem Vindo(a)! Aqui você poderá ver o Resumo da sua Seção" homeOn  />
    </>
  )
}

export default Home
