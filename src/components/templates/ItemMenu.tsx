import Link from 'next/link';
import { FC } from 'react';

interface ItemMenuProps {
  url?: string
  text: string
  icon: any
  onClickProps?: () => void
}

const ItemMenu: FC<ItemMenuProps> = ({ url, text, icon, onClickProps }) => {
  return (
    <li onClick={ onClickProps } className="scale-95 hover:scale-100 transition-transform cursor-pointer select-none dark:bg-zinc-800 dark:text-zinc-200 bg-zinc-200 text-zinc-900">
      {!onClickProps ? (
        <Link href={ url }>
          <a className="flex flex-col gap-2 justify-center items-center h-20 w-25">
            <div className="flex items-center gap-2">
              {icon}
            </div>
            <p className="text-xs font-light text-zinc-600 dark:text-zinc-200">{text}</p>
          </a>
        </Link>
      ) : (
        <a className="flex flex-col gap-2 justify-center items-center h-20 w-25">
          {icon}
          <p className="text-xs font-light text-red-700 dark:text-red-400">{text}</p>
        </a>
      )}
    </li>
  );
}

export default ItemMenu;