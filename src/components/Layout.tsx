import type { FC } from 'react';
import { useAppData } from '../data/hook/useAppData';
import ForceAuth from './auth/ForceAuth';
import Content from './templates/Content';
import Header from './templates/Header';
import LateralMenu from './templates/LateralMenu';

interface LayoutProps {
  title: string
  subtitle: string
  homeOn?: boolean
  generalChatOn?: boolean
  profilePageOn?: boolean
}

const Layout: FC<LayoutProps> = ({ title, subtitle, homeOn, generalChatOn, profilePageOn }) => {
  const { theme } = useAppData();
  return (
    <ForceAuth>
      <div className={`${theme} flex h-screen w-screen transition-colors`}>
        <LateralMenu />
        <div className="flex flex-col w-full p-7 bg-zinc-300 dark:bg-zinc-900">
          <Header title={title} subtitle={subtitle} />
          <Content homePage={ homeOn } generalChat={ generalChatOn } profilePage={ profilePageOn } />
        </div>
      </div>
    </ForceAuth>
  );
}

export default Layout;