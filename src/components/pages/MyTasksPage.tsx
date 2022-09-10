/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useEffect } from 'react';
import { readLocalStorage, removeLocalStorage } from '../../localstorage';
import { Trash } from '../icons';

interface MyTasksPageProps {}

const MyTasksPage: FC<MyTasksPageProps> = ({}) => {
  const [localTasks, setLocalTasks] = useState([]);

  const removeTasks = (id: number) => {
    removeLocalStorage(id);
    setLocalTasks((old: any) => old.filter((item: any) => item.id !== id));
  };

  useEffect(() => {
    const read = readLocalStorage()
    setLocalTasks(read);
  }, []);

  return (
    <>
      {localTasks.length > 0 ? localTasks?.map((item: any) => (
        <div key={ item.id } className="flex gap-2 p-2" >
          <p>{item.task}</p>
          <p onClick={() => { removeTasks(item.id) }} className="cursor-pointer hover:animate-pulse transition-opacity">{ Trash }</p>
        </div>
      )) : (
        <p>You do not have any tasks yet!</p>
      )}
    </>
  );
}

export default MyTasksPage;