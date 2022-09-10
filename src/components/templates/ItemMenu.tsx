import Link from 'next/link';
import { FC } from 'react';
import { useAppData } from '../../data/hook/useAppData';

interface ItemMenuProps {
  url?: string
  text: string
  icon: any
  onClickProps?: () => void
  local?: boolean
}

const ItemMenu: FC<ItemMenuProps> = ({ url, text, icon, onClickProps, local }) => {
  const { localTasks } = useAppData();
  return (
    <li onClick={ onClickProps } className="hover:bg-zinc-300 dark:hover:bg-zinc-900 transition-colors cursor-pointer select-none dark:bg-zinc-800 dark:text-zinc-200 bg-zinc-200 text-zinc-900">
      {url ? (
        <Link href={ url }>
          <a className="flex flex-col gap-2 justify-center items-center h-20 w-20">
            <div className="flex items-center gap-2">
              {icon}
              {local && <p className="text-xs font-light text-red-700 dark:text-red-400 mr-[-15px]">{localTasks?.length }</p>}
            </div>
            <p className="text-xs font-light text-zinc-600 dark:text-zinc-200">{text}</p>
          </a>
        </Link>
      ) : (
        <a className="flex flex-col gap-2 justify-center items-center h-20 w-20">
          {icon}
          <p className="text-xs font-light text-red-700 dark:text-red-400">{text}</p>
        </a>
      )}
    </li>
  );
}

export default ItemMenu;