import Link from 'next/link';
import type { FC } from 'react';
import { useAuth } from '../../../data/hook/useAuth';
import * as styles from './styles';

interface UserAvatarProps {}

const UserAvatar: FC<UserAvatarProps> = ({}) => {
  const { user } = useAuth();
  const defaultImage = 'https://img.icons8.com/dusk/344/circled-user-male-skin-type-4.png';
  return (
    <Link href="/profile">
      <picture>
        <img
          className={ styles.imgStyles }
          src={user?.urlImage ?? defaultImage }
          alt="user profile image"
        />
      </picture>
    </Link>
  );
}

export default UserAvatar;