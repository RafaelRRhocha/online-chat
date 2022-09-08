import type { FC } from 'react';
import Layout from '../components/Layout';

interface notificationsProps {}

const notifications: FC<notificationsProps> = ({}) => {
  return (
    <Layout title="Notificações" subtitle="Aqui você encontra a aba de notificações" />
  );
}

export default notifications;