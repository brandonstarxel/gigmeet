import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'mia';
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "hey Raymond, thanks for applying! can u make a 7pm start on 21 June?",
      sender: 'mia'
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationStep, setConversationStep] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  // Mia's responses
  const miaResponses = [
    "do u have your own DJ set?",
    "sure that's chill, thank youuu see you then :)"
  ];
  
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
      sender: 'user'
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    
    // Show Mia's response after delays if there's a next step
    if (conversationStep < miaResponses.length) {
      // Wait 1 second before showing typing indicator
      setTimeout(() => {
        setIsTyping(true);
        
        // Then wait 5 more seconds before showing Mia's response
        setTimeout(() => {
          const miaMessage: Message = {
            id: messages.length + 2,
            text: miaResponses[conversationStep],
            sender: 'mia'
          };
          
          setMessages(prev => [...prev, miaMessage]);
          setIsTyping(false);
          
          // After final Mia message, wait 2s then navigate away
          if (conversationStep === miaResponses.length - 1) {
            setTimeout(() => {
              navigate('/match');
            }, 4000);
          }
          
          setConversationStep(prev => prev + 1);
        }, 5000); // 5s typing
      }, 1000); // 1s initial delay
    } else {
      // No more responses from Mia
      setIsTyping(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-base-100 rounded-lg shadow-xl overflow-hidden flex flex-col h-[600px]">
        {/* Chat header */}
        <div className="bg-primary text-primary-content p-4 flex items-center">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="/miawu.png" alt="Mia Wu" />
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
                    <img src="/miawu.png" alt="Mia Wu" />
                  </div>
                </div>
              )}
              <div className={`chat-bubble ${message.sender === 'user' ? 'chat-bubble-primary' : 'bg-base-100'}`}>
                {message.text}
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="chat chat-start mb-4">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src="/miawu.png" alt="Mia Wu" />
                </div>
              </div>
              <div className="chat-bubble bg-base-100">
                <div className="flex gap-1">
                  <span className="loading loading-dots loading-xs"></span>
                </div>
              </div>
            </div>
          )}
          
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
              disabled={isTyping || conversationStep > miaResponses.length}
            />
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isTyping || conversationStep > miaResponses.length || newMessage.trim() === ''}
            >
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
