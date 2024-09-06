'use client';

import React, { useState, useRef } from 'react';
import getChatResponse from '../lib/chat';

const Chat = () => {
  const [chatOutput, setChatOutput] = useState<string>();
  const chatInput = useRef<HTMLInputElement | null>(null);

  const sendMessage = async () => {
    if (!chatInput.current) {
      return;
    }

    const chatResponse = await getChatResponse(chatInput.current.value);
    setChatOutput(() => chatResponse);
  };

  return (
    <div>
      <h1>Chat Sir</h1>
      { chatOutput && <p id="chat-output">{chatOutput}</p> }
      <br />
      <label htmlFor="chat-input">
        Enter your message
        <input id="chat-input" ref={chatInput} />
      </label>
      <button onClick={sendMessage} type="button">Send</button>
    </div>
  );
};

export default Chat;
