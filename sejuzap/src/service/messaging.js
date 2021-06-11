import {db } from '../firebase'

const MessaginService = {

    async getMessages() {
    
        return db
          .collection('messages')
          .then(messages => {
            let _messages = []
            messages.forEach(message => {
              _messages.push(message.data())
            })
            return _messages
          })
      }
        
}

export default MessaginService