import useMessages from "../hooks/useMessages";
import MessegeSender from "../components/MessegeSender";
import Messages from "../components/Messages";

import "./Chat.scss";

function Chat() {
  const [messages, loading, error] = useMessages();

  return (
    <div className="Chat">
      <Messages messages={messages} />
      <MessegeSender />
    </div>
  );
}

export default Chat;
