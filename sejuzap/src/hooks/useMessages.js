import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

function useMessages() {
  const [messages, setMessages] = useState([]);
  const [messagesCollection, loading, error] = useCollection(
    db.collection("messages")
  );

  useEffect(() => {
    const newMessages =
      messagesCollection?.docs.map((doc) => ({
        ...doc.data(),
        key: doc.id,
      })) || [];
    setMessages(newMessages);
  }, [messagesCollection]);

  return [messages, loading, error];
}

export default useMessages;
