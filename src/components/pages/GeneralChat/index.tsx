import { FC, useState } from 'react';
import ChatRoom from '../../templates/ChatRoom';
import * as styles from './styles';

interface GeneralChatProps {}

const GeneralChat: FC<GeneralChatProps> = ({}) => {
  const [messages, setMessages] = useState('');

  return (
    <div className={ styles.chatDiv }>
      <ChatRoom />
      <div className={ styles.userInputs }>
        <input
          type="text"
          value={ messages }
          name="messages"
          onChange={({ target: { value }}) => setMessages(value)}
          placeholder="Digite Aqui"
          className={ styles.chatInput }
        />
        <button
          type="button"
          className={ styles.btn }
          onClick={() => alert('Em Desenvolvimento!')}
          disabled={ messages.length < 1}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default GeneralChat;