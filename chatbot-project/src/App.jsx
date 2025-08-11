import { useState, useEffect } from 'react';
import ChatInput from './components/ChatInput';
import { Chatbot } from 'supersimpledev';
import './App.css';
import ChatMessages from './components/ChatMessages';

function App() {
  // Initialize state with messages from localStorage or default messages
  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem('messages')) || [
      {
        message: 'hello chatbot',
        sender: 'user',
        id: 'id1',
        time: 1736127288920
      },
      {
        message: 'Hello! How can I help you?',
        sender: 'robot',
        id: 'id2',
        time: 1736127291230
      },
      {
        message: 'Can you give me todays date?',
        sender: 'user',
        id: 'id3',
        time: 1736127385356
      },
      {
        message: 'Today is August 3',
        sender: 'robot',
        id: 'id4',
        time: 1736127385500
      }
    ]
  );

  // Add chatbot responses
  useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a great day!',
      'give me a unique id': function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      },
      'what is today\'s date?': function() {
        return `Today is ${new Date().toLocaleDateString()}`;
      },
      'what time is it?': function() {
        return `The current time is ${new Date().toLocaleTimeString()}`;
      }
    });
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;