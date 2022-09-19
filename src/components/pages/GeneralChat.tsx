import { FC } from 'react';
import * as styles from './TailwindClass';

interface GeneralChatProps {}

const GeneralChat: FC<GeneralChatProps> = ({}) => {
  return (
    <div>
      <input type="text" placeholder="Digite Aqui" className={ styles.GeneralChatClass } />
    </div>
  );
}

export default GeneralChat;