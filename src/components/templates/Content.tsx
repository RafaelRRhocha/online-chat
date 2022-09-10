import type { FC } from 'react';
import HomePage from '../pages/HomePage';
import MyTasksPage from '../pages/MyTasksPage';
import NewTasksPage from '../pages/NewTasksPage';

interface ContentProps {
  homePage?: boolean
  newTaskPage?: boolean
  myTasksPage?: boolean
}

const Content: FC<ContentProps> = ({ homePage, newTaskPage, myTasksPage }) => {
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
    </>
  );
}

export default Content;