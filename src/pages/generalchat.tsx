import type { FC } from 'react';
import Layout from '../components/templates/Layout';

interface generalchatProps {}

const generalchat: FC<generalchatProps> = ({}) => {
  return (
    <Layout title="Chat Geral" subtitle="Interaja com diversas pessoas no chat abaixo!" generalChatOn />
  );
}

export default generalchat;