import type { FC } from 'react';
import HomePage from '../pages/HomePage';
import MyTasksPage from '../pages/MyTasksPage';
import NewTasksPage from '../pages/NewTasksPage';
import ProfilePage from '../pages/ProfilePage';

interface ContentProps {
  homePage?: boolean
  newTaskPage?: boolean
  myTasksPage?: boolean
  profilePage?: boolean
}

const Content: FC<ContentProps> = ({ homePage, newTaskPage, myTasksPage, profilePage }) => {
  return (
    <>
      {homePage && (
        <div className="flex flex-col mt-7">
          <HomePage />
        </div>
      )}
      {newTaskPage && (
        <div className="flex flex-col mt-7">
          <NewTasksPage />
        </div>
      )}
      {myTasksPage && (
        <div className="flex flex-col mt-7">
          <MyTasksPage />
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