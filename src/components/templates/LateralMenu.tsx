import Image from 'next/image';
import type { FC } from 'react';
import { Bell, Home, Settings } from '../icons';
import MenuItem from './MenuItem';

interface LateralMenuProps {}

const LateralMenu: FC<LateralMenuProps> = ({}) => {
  return (
    <aside>
      <div className="h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center h-10 w-10">
            <a href="https://github.com/RafaelRRhocha" target="_blank" className="text-black" rel="noreferrer">
              <Image height="60px" width="60px" src="https://img.icons8.com/ios-glyphs/344/github.png" alt="ícone do github" className="scale-100 hover:scale-105 transition-transform" />
            </a>
          </div>
      </div>
      <ul>
        <MenuItem url="/" text="Home" icon={Home}/>
        <MenuItem url="/settings" text="Settings" icon={Settings}/>
        <MenuItem url="/notifications" text="Notifications" icon={Bell}/>
      </ul>
    </aside>
  );
}

export default LateralMenu;