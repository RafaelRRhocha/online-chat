import type { FC } from 'react';
import HomePage from '../pages/HomePage';
import GeneralChat from '../pages/GeneralChat';
import ProfilePage from '../pages/ProfilePage';

interface ContentProps {
  homePage?: boolean
  generalChat?: boolean
  profilePage?: boolean
}

const Content: FC<ContentProps> = ({ homePage, generalChat, profilePage }) => {
  return (
    <>
      {homePage && (
        <div className="flex flex-col mt-7">
          <HomePage />
        </div>
      )}
      {generalChat && (
        <div className="flex flex-col mt-7">
          <GeneralChat />
        </div>
      )}
      {profilePage && (
        <div className="flex flex-col mt-7">
          <ProfilePage />
        </div>
      )}
    </>
  );
}

export default Content;