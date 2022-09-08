import Link from 'next/link';
import type { FC } from 'react';

interface MenuItemProps {
  url: string
  text: string
  icon: any
}

const MenuItem: FC<MenuItemProps> = ({ url, text, icon }) => {
  return (
    <li className="hover:bg-zinc-200 transition-colors">
      <Link href={ url }>
        <a className="flex flex-col justify-center items-center h-20 w-20">
          {icon}
          <p className="text-xs font-light text-zinc-600">{text}</p>
        </a>
      </Link>
    </li>
  );
}

export default MenuItem;