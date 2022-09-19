import type { NextPage } from 'next'
import Layout from '../components/Layout'
import { useAuth } from '../data/hook/useAuth'

const Home: NextPage = () => {
  const { user } = useAuth();
  return (
    <>
      <Layout title={`Olá! ${user?.name ?? 'Usuário(a)'}!`} subtitle="esse é o subtitle" homeOn  />
    </>
  )
}

export default Home
