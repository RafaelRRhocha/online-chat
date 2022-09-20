import { FC } from 'react';
import ChatRoom from '../../templates/ChatRoom';
import * as styles from './styles';

interface GeneralChatProps {}

const GeneralChat: FC<GeneralChatProps> = ({}) => {
  return (
    <div className={ styles.chatDiv }>
      <ChatRoom />
      <input type="text" placeholder="Digite Aqui" className={ styles.chatInput } />
    </div>
  );
}

export default GeneralChat;