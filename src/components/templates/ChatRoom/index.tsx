import type { FC } from 'react';
import * as styles from './styles';

interface ChatRoomProps {}

const ChatRoom: FC<ChatRoomProps> = ({}) => {
  return (
    <div className={ styles.div }>
      chat será renderizado aqui
    </div>
  );
}

export default ChatRoom;