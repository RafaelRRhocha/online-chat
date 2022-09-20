import type { FC } from 'react';
import DarkModeButton from '../DarkModeButton';
import Title from '../Title';
import UserAvatar from '../UserAvatar';
import * as styles from './styles';

interface HeaderProps {
  title: string
  subtitle: string
}

const Header: FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className={ styles.headerStyles }>
      <Title title={title} subtitle={subtitle} />
      <div className={ styles.divStyles } >
        <DarkModeButton />
        <UserAvatar />
      </div>
    </div>
  );
}

export default Header;