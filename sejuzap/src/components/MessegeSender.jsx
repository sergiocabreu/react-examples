import { useState } from "react";
import MessagingService from "../services/messaging";

import "./MessageSender.scss";

function MessegeSender() {
  const [message, setMessage] = useState("");

  function handleSubmit() {
    MessagingService.sendMessage(message);
    setMessage("");
  }
  return (
    <div className={"MessageSender"}>
      <input
        type="text"
        value={message}
        placeholder="Digite uma mensagem"
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      ></input>
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}

export default MessegeSender;
