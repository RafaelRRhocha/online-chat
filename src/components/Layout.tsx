import type { FC } from 'react';
import Content from './templates/Content';
import Header from './templates/Header';
import LateralMenu from './templates/LateralMenu';

interface LayoutProps {
  title: string
  subtitle: string
  childrens?: any
}

const Layout: FC<LayoutProps> = ({ title, subtitle, childrens }) => {
  return (
    <div className="dark flex h-screen w-screen">
      <LateralMenu />
      <div className="flex flex-col w-full p-7 bg-zinc-300 dark:bg-zinc-900">
        <Header title={title} subtitle={subtitle} />
        <Content childrens={childrens} />
      </div>
    </div>
  );
}

export default Layout;