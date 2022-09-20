import type { FC } from 'react';
import { useAuth } from '../../../data/hook/useAuth';
import { Home, Logout, Chat } from '../../icons';
import ItemMenu from '../ItemMenu';
import * as styles from './styles';

interface LateralMenuProps {}

const LateralMenu: FC<LateralMenuProps> = ({}) => {
  const { logout } = useAuth();

  return (
    <aside className={ styles.asideStyles }>
      <div className={ styles.gitDivStyles }>
          <div className={ styles.gitDivImageStyles }>
            <a href="https://github.com/RafaelRRhocha" target="_blank" rel="noreferrer">
              <picture>
                <img className={ styles.gitImageStyles } src="https://img.icons8.com/ios-glyphs/344/github.png" alt="ícone do github" />
              </picture>
            </a>
          </div>
      </div>
      <ul className={ styles.ulStyles }>
        <ItemMenu url="/" text="Home" icon={Home} />
        <ItemMenu url="/generalchat" text="Chat Geral" icon={Chat} />
      </ul>
      <ul>
        <ItemMenu onClickProps={ logout } url="/authentication" text="Sair" icon={Logout}/>
      </ul>
    </aside>
  );
}

export default LateralMenu;