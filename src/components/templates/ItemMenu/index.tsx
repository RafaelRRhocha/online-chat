import Link from 'next/link';
import { FC } from 'react';
import * as styles from './styles';

interface ItemMenuProps {
  url?: string
  text: string
  icon: any
  onClickProps?: () => void
}

const ItemMenu: FC<ItemMenuProps> = ({ url, text, icon, onClickProps }) => {
  return (
    <li onClick={ onClickProps } className={ styles.liStyles }>
      {!onClickProps ? (
        <Link href={ url }>
          <a className={ styles.aLinkStyles }>
            <div className={ styles.iconDivStyles }>
              {icon}
            </div>
            <p className={ styles.itemTextStyles }>{text}</p>
          </a>
        </Link>
      ) : (
        <a className={ styles.aLinkStyles }>
          {icon}
          <p className={ styles.exitTextStyles }>{text}</p>
        </a>
      )}
    </li>
  );
}

export default ItemMenu;