import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'mia';
  timestamp: Date;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! Thanks for applying to be the DJ at my birthday party! Do you have any questions for me?",
      sender: 'mia',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Automatic responses from Mia based on keywords
  const miaResponses: { [key: string]: string } = {
    'equipment': "I have some basic speakers, but you should bring your own DJ equipment. Is that okay?",
    'payment': "The payment is £12/hour for 4 hours, so that's £48 total. I can pay in cash at the end of the night!",
    'address': "The party is at 123 Chelsea Ave in London. I'll send the full details closer to the date!",
    'playlist': "I love hip hop and afrobeats! Some of my favorites are Burna Boy, Wizkid, Drake, and Doja Cat.",
    'time': "The party starts at a 8pm, but I need you there from 7pm to set up. You'll play from 10pm until 2am.",
    'dress code': "No specific dress code for you, just dress comfortably but still looking good for a party!",
    'guests': "We're expecting about 50 people, mostly friends from university and some colleagues.",
    'hello': "Hey! So excited to chat with you about DJing my birthday party!",
    'hi': "Hey there! Thanks for being interested in the gig!",
    'experience': "Your experience sounds great! I'm not too picky, just want someone who can read the crowd and keep everyone dancing!"
  };
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newMessage.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setNewMessage('');
    
    // Check for keywords and generate Mia's response
    setTimeout(() => {
      let responded = false;
      
      for (const [keyword, response] of Object.entries(miaResponses)) {
        if (newMessage.toLowerCase().includes(keyword.toLowerCase())) {
          const miaMessage: Message = {
            id: messages.length + 2,
            text: response,
            sender: 'mia',
            timestamp: new Date()
          };
          
          setMessages(prevMessages => [...prevMessages, miaMessage]);
          responded = true;
          break;
        }
      }
      
      // Default response if no keywords matched
      if (!responded) {
        const defaultResponses = [
          "That sounds good! Any other questions about the party?",
          "Great! I'm looking forward to having you DJ at my birthday!",
          "Awesome! It's going to be such a fun night!",
          "Thanks for letting me know! Anything else you're wondering about?",
          "Perfect! I can't wait for the party!"
        ];
        
        const randomResponse = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
        
        const miaMessage: Message = {
          id: messages.length + 2,
          text: randomResponse,
          sender: 'mia',
          timestamp: new Date()
        };
        
        setMessages(prevMessages => [...prevMessages, miaMessage]);
      }
    }, 1000);
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-base-100 rounded-lg shadow-xl overflow-hidden flex flex-col h-[600px]">
        {/* Chat header */}
        <div className="bg-primary text-primary-content p-4 flex items-center">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="/images/mia-avatar.jpg" alt="Mia's profile" />
            </div>
          </div>
          <div className="ml-3">
            <h2 className="font-bold">Mia Wu</h2>
            <p className="text-xs">Birthday Party Host • Online</p>
          </div>
        </div>
        
        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-base-200">
          {messages.map(message => (
            <div 
              key={message.id} 
              className={`chat ${message.sender === 'user' ? 'chat-end' : 'chat-start'} mb-4`}
            >
              {message.sender === 'mia' && (
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="/images/mia-avatar.jpg" alt="Mia's profile" />
                  </div>
                </div>
              )}
              <div className={`chat-bubble ${message.sender === 'user' ? 'chat-bubble-primary' : 'bg-base-100'}`}>
                {message.text}
              </div>
              <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
                {formatTime(message.timestamp)}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Chat input */}
        <form onSubmit={handleSendMessage} className="bg-base-100 p-4 border-t border-base-300">
          <div className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              placeholder="Type your message here..."
              className="input input-bordered flex-1"
            />
            <button type="submit" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </form>
      </div>
      
      {/* Additional info below the chat */}
      <div className="mt-6 text-center text-sm opacity-70">
        <p>Chat directly with Mia to discuss the DJ position</p>
        <p className="mt-2">You can ask about equipment, payment, playlist preferences, etc.</p>
      </div>
    </div>
  );
};

export default ChatInterface;