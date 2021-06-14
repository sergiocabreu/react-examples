import useMessages from "../hooks/useMessages";
import MessegeSender from "../components/MessegeSender";
import Messages from "../components/Messages";
function Chat() {
  const [messages, loading, error] = useMessages();

  return (
    <div>
      <Messages messages={messages} />
      <MessegeSender />
    </div>
  );
}

export default Chat;
