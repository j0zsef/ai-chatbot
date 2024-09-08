'use client';

import React, { useState } from 'react';
import ChatHistory from './ChatHistory';

const Chat = () => {
  const [chatInput, setChatInput] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem('chat-input') as HTMLInputElement;
    if (!input || !input.value.trim()) return;
    setChatInput(input.value.trim());
    input.value = '';
  };

  return (
    <div>
      <h1>Chat Bot</h1>
      <h2>Chat History</h2>
      {chatInput && <ChatHistory chatInput={chatInput} />}
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="chat-input">
          Enter your message
          <input id="chat-input" name="chat-input" />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
