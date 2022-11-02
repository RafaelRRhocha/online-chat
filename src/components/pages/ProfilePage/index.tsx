import type { FC } from 'react';
import { useAuth } from '../../../data/hook/useAuth';
import * as styles from './styles';

interface ProfilePageProps {}

const ProfilePage: FC<ProfilePageProps> = ({}) => {
  const { user } = useAuth();
  const defaultImage = 'https://img.icons8.com/dusk/344/circled-user-male-skin-type-4.png';
  return (
    <div className={ styles.divFather }>
      <picture>
        <img
          src={ user?.urlImage ?? defaultImage } 
          alt="profile image"
          className={ styles.imgProfile }
        />
      </picture>
      <div className={ styles.textDiv }>
        <p className={ styles.text }>{user?.email}</p>
        <p className={ styles.text }>{user?.name ?? 'Usuário'}</p>
      </div>
    </div>
  );
}

export default ProfilePage;