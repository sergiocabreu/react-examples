import { db } from "../firebase";

const MessagingService = {
  async getMessagesv2() {
    return db
      .collection("messages")
      .get()
      .then((messages) => {
        let _messages = [];
        messages.forEach((message) => {
          _messages.push(message.data());
        });
        return _messages;
      });
  },
  async node() {
    return await db
      .collection("messages")
      .get()
      .then((docs) => {
        let _messages = [];
        docs.forEach((doc) => {
          _messages.push({ ...doc.data() });
        });
        return _messages;
      });
  },
  sendMessage(message) {
    db.collection("messages").add({
      userId: "sergio",
      message: message,
    });
  },
};

export default MessagingService;
