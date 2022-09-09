import Link from 'next/link';
import type { FC } from 'react';
import { useAuth } from '../../data/hook/useAuth';

interface UserAvatarProps {}

const UserAvatar: FC<UserAvatarProps> = ({}) => {
  const { user } = useAuth();
  return (
    <Link href="/profile">
      <picture>
        <img className="h-7 w-7 rounded-full cursor-pointer" src={user?.urlImage ?? 'https://img.icons8.com/dusk/344/circled-user-male-skin-type-4.png'} alt="user profile image" />
      </picture>
    </Link>
  );
}

export default UserAvatar;