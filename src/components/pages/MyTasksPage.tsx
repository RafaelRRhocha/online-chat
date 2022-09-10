/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';
import { useAppData } from '../../data/hook/useAppData';
import { readLocalStorage, removeLocalStorage } from '../../localstorage';
import { Trash } from '../icons';

interface MyTasksPageProps {}

const MyTasksPage: FC<MyTasksPageProps> = ({}) => {
  const { localTasks, setLocalTasks } = useAppData();

  const removeTasks = (id: number) => {
    removeLocalStorage(id);
    setLocalTasks((old: any) => old.filter((item: any) => item.id !== id));
  };

  useEffect(() => {
    setLocalTasks(localTasks);
  }, []);

  return (
    <>
      {localTasks?.map((item: any) => (
        <div key={ item.id } className="flex gap-2 p-2" >
          <p>{item.task}</p>
          <p onClick={() => { removeTasks(item.id) }} className="cursor-pointer hover:animate-pulse transition-opacity">{ Trash }</p>
        </div>
      ))}
    </>
  );
}

export default MyTasksPage;