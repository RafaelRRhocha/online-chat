import type { FC } from 'react';
import HomePage from '../../pages/HomePage';
import GeneralChat from '../../pages/GeneralChat';
import ProfilePage from '../../pages/ProfilePage';
import * as styles from './styles';

interface ContentProps {
  homePage?: boolean
  generalChat?: boolean
  profilePage?: boolean
}

const Content: FC<ContentProps> = ({ homePage, generalChat, profilePage }) => {
  return (
    <>
      {homePage && (
        <div className={ styles.pagesStyles }>
          <HomePage />
        </div>
      )}
      {generalChat && (
        <div className={ styles.pagesStyles }>
          <GeneralChat />
        </div>
      )}
      {profilePage && (
        <div className={ styles.pagesStyles }>
          <ProfilePage />
        </div>
      )}
    </>
  );
}

export default Content;