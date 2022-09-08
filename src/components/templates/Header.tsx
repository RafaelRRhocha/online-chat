import type { FC } from 'react';
import Title from './Title';

interface HeaderProps {
  title: string
  subtitle: string
}

const Header: FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header>
      <Title title={title} subtitle={subtitle} />
    </header>
  );
}
export default Header;