function Messages({ messages }) {
  return (
    <div>
      {messages.map((message) => (
        <div key={message.key}>{JSON.stringify(message)}</div>
      ))}
    </div>
  );
}

export default Messages;
