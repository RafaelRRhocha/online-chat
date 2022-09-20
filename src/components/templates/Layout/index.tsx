import type { FC } from 'react';
import ForceAuth from '../../auth/ForceAuth';
import { useAppData } from "../../../data/hook/useAppData";
import Content from '../Content';
import Header from '../Header';
import LateralMenu from '../LateralMenu';
import * as styles from './styles';

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
      <div className={ `${ theme } ${ styles.themeDivStyles }` }>
        <LateralMenu />
        <div className={ styles.contentStyles }>
          <Header title={title} subtitle={subtitle} />
          <Content homePage={ homeOn } generalChat={ generalChatOn } profilePage={ profilePageOn } />
        </div>
      </div>
    </ForceAuth>
  );
}

export default Layout;