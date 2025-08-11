      import { useState } from 'react'
      import { Chatbot } from 'supersimpledev'
      import './ChatInput.css'
      import dayjs from 'dayjs';
      
      
      function ChatInput({chatMessages, setChatMessages}) {
      const [inputText, setInputText] = useState('');

        function saveInputText(event) {
        setInputText(event.target.value);
          
        }
        function clearLocalStorage() {
          setChatMessages([]);
        }

       async function sendMessage() {
        setInputText('');
          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: 'user',
              id: crypto.randomUUID(),
              time: dayjs().valueOf()
            }
          ]
            setChatMessages([
            ...newChatMessages,
            // This creates a temporary Loading... message.
            // Because we don't save this message in newChatMessages,
            // it will be remove later, when we add the response.
            {
              message: 'Loading...',
              sender: 'robot',
              id: crypto.randomUUID(),
              time: dayjs().valueOf()
            }
          ]);

         const response = await Chatbot.getResponseAsync(inputText)
         setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: 'robot',
              id: crypto.randomUUID(),
              time: dayjs().valueOf()
            }
          ])
            setInputText('')
        }
        function handleKeyDown(event) {
          if (event.key === 'Enter') {
            sendMessage()
          } else if (event.key === 'Escape'){
            setInputText('')
          }
        }
        

        return (
          <div className="chat-input-container">
            <input 
              placeholder="Send a message to Chatbot" 
              size = "30"
              onChange={saveInputText}
              value={inputText}
              onKeyDown={handleKeyDown}
              className="chat-input"
              
              >
              
            </input>

            <button onClick={sendMessage}
            className="send-button">Send</button>
            <button className='clear-button' onClick={clearLocalStorage}>Clear</button>
          </div>
        )
      }


      export default ChatInput