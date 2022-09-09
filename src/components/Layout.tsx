import type { FC } from 'react';
import { useAppData } from '../data/hook/useAppData';
import Content from './templates/Content';
import Header from './templates/Header';
import LateralMenu from './templates/LateralMenu';

interface LayoutProps {
  title: string
  subtitle: string
  childrens?: any
}

const Layout: FC<LayoutProps> = ({ title, subtitle, childrens }) => {
  const { theme } = useAppData();
  return (
    <div className={`${theme} flex h-screen w-screen transition-colors`}>
      <LateralMenu />
      <div className="flex flex-col w-full p-7 bg-zinc-300 dark:bg-zinc-900">
        <Header title={title} subtitle={subtitle} />
        <Content childrens={childrens} />
      </div>
    </div>
  );
}

export default Layout;