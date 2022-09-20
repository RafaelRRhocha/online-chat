import type { FC } from 'react';
import Layout from '../components/templates/Layout';

interface generalchatProps {}

const generalchat: FC<generalchatProps> = ({}) => {
  return (
    <Layout title="Chat Geral" subtitle="Bem Vindo(a) o chat geral!" generalChatOn />
  );
}

export default generalchat;