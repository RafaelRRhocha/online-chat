import { FC } from 'react';
import * as styles from './styles';

interface GeneralChatProps {}

const GeneralChat: FC<GeneralChatProps> = ({}) => {
  return (
    <div className={ styles.inputDiv }>
      <input type="text" placeholder="Digite Aqui" className={ styles.chatInput } />
    </div>
  );
}

export default GeneralChat;