import type { FC } from 'react';
import * as styles from './styles';

interface ProfilePageProps {}

const ProfilePage: FC<ProfilePageProps> = ({}) => {
  return (
    <p className={styles.textProfile} >conteudo do perfil</p>
  );
}

export default ProfilePage;