import "./Messages.scss";

function Messages({ messages }) {
  return (
    <div className="Messages">
      {messages.map((message) => {
        const user = "sergio";
        const messageClass =
          message.user.userId === user ? "outgoing" : "incoming";

        return (
          <div key={message.key} className={`Message ${messageClass}`}>
            <div className={messageClass}>
              <span>{message.message}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Messages;
