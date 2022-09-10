import { FC, useState } from 'react';
import { useAppData } from '../../data/hook/useAppData';
import { readLocalStorage, saveLocalStorage } from '../../localstorage';

interface NewTasksPageProps {}

const NewTasksPage: FC<NewTasksPageProps> = ({}) => {
  const { setLocalTasks } = useAppData();
  const [newTask, setNewTask] = useState('');

  const read = readLocalStorage();
  const createNewTask = ({ target: { value } }) => setNewTask(value);

  return (
    <div className="flex flex-col gap-2 items-center">
      <input className="w-full max-w-xs rounded-lg p-1 text-zinc-800" autoComplete="off" type="text" value={newTask} name="newTask" onChange={ createNewTask } />
      <button disabled={ newTask.length < 3} type="button" className="btn btn-success w-full max-w-xs" onClick={() => {
        saveLocalStorage({
          id: read?.length + 1 || 1,
          task: newTask
        });
        setNewTask('');
        setLocalTasks(read);
      }} >salvar</button>
    </div>
  );
}

export default NewTasksPage;