import type { FC } from 'react';
import DarkModeButton from './DarkModeButton';
import Title from './Title';
import UserAvatar from './UserAvatar';

interface HeaderProps {
  title: string
  subtitle: string
}

const Header: FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="flex">
      <Title title={title} subtitle={subtitle} />
      <div className="flex items-center flex-grow justify-end gap-2">
        <DarkModeButton />
        <UserAvatar />
      </div>
    </div>
  );
}

export default Header;