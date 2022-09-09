import Link from 'next/link';
import type { FC } from 'react';

interface ItemMenuProps {
  url?: string
  text: string
  icon: any
  onClickProps?: () => void
}

const ItemMenu: FC<ItemMenuProps> = ({ url, text, icon, onClickProps }) => {
  return (
    <li onClick={ onClickProps } className="hover:bg-zinc-300 dark:hover:bg-zinc-900 transition-colors cursor-pointer select-none dark:bg-zinc-800 dark:text-zinc-200 bg-zinc-200 text-zinc-900">
      {url ? (
        <Link href={ url }>
          <a className="flex flex-col gap-2 justify-center items-center h-20 w-20">
            {icon}
            <p className="text-xs font-light text-zinc-600 dark:text-zinc-200">{text}</p>
          </a>
        </Link>
      ) : (
        <a className="flex flex-col gap-2 justify-center items-center h-20 w-20">
          {icon}
          <p className="text-xs font-light text-red-500">{text}</p>
        </a>
      )}
    </li>
  );
}

export default ItemMenu;