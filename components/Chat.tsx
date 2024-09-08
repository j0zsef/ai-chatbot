'use client';

import React, { useState, useRef } from 'react';
import ChatHistory from './ChatHistory';

const Chat = () => {
  const [chatInput, setChatInput] = useState<string>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSetChatHistory = () => {
    if (inputRef.current) {
      setChatInput(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <h1>Chat Bot</h1>
      <h2>Chat History</h2>
      {chatInput && <ChatHistory key={chatInput} chatInput={chatInput} />}
      <br />
      <label htmlFor="chat-input">
        Enter your message
        <input id="chat-input" ref={inputRef} />
      </label>
      <button onClick={() => handleSetChatHistory()} type="button">Send</button>
    </div>
  );
};

export default Chat;
