import { useEffect, useState } from 'react'
import { io } from 'socket.io-client';
import axios from 'axios';

const serverUrl='http://localhost:5000'

const socket = io(serverUrl,{
  transports: ['websocket']
});

function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');

  // Fetch initial messages from the server
  useEffect(() => {
      
      socket.on('connect', ()=>{
        setUsername(socket.id);
      });

      socket.on('connect_error', (error) => {
        console.error('Connection error:', error);
    });

    

    axios.get(`${serverUrl}/chat/messages`)
    .then(response => {
        console.log(response.data.messages);
        
        setMessages(response.data.messages);
    })
    .catch(error => console.error('Error fetching messages:', error));
  }, []);

  // Listen for new messages from the server
  useEffect(() => {
      socket.on('initMessages', (initMessages) => {
          setMessages(initMessages);
      });

      socket.on('message', (newMessage) => {
          console.log(newMessage);
          
          setMessages((prevMessages) => [...prevMessages, newMessage]);
      });

      return () => {
          socket.off('initMessages');
          socket.off('message');
      };
  }, []);

  // Send a new message
  const sendMessage = async (e) => {
      e.preventDefault();

      try {
          const response=await axios.post('http://localhost:5000/chat/sendmessage', {
              username,
              message,
          });
          setMessages(response.data.messages);
          setMessage(''); // Clear the input field
      } catch (error) {
          console.error('Error sending message:', error);
      }
  };

  return (
      <div>
          <h2>Chat Application</h2>

          <div>
              {messages.map((msg, index) => (
                  <div key={index}>
                      <strong>{ 
                        socket.id == msg.username ? 'You': msg.username
                        }
                        {
                          console.log(socket.id)
                        }</strong>: {msg.message}
                  </div>
              ))}
          </div>

          <form onSubmit={sendMessage}>
              <input
                  type="text"
                  placeholder="Type a message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
              />
              <button type="submit">Send</button>
          </form>
      </div>
  );
}

export default App
