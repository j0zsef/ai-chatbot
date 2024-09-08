import React, { useState, useEffect } from 'react';
import getChatResponse from '../lib/chat';

interface ChatHistoryProps {
  chatInput: string;
}

type ChatHistoryEntry = {
    input: string;
    output: string;
};

const ChatHistory: React.FC<ChatHistoryProps> = ({ chatInput }) => {
  // put this into the context API
  const [chatHistory, setChatHistory] = useState<ChatHistoryEntry[]>([]);

  useEffect(() => {
    const fetchChatResponse = async () => {
      const chatResponse = await getChatResponse(chatInput);
      setChatHistory((prevChatHistory) => {
        return [{ input: chatInput, output: chatResponse }, ...(prevChatHistory || [])];
      });
    };

    fetchChatResponse();
  }, [chatInput]);

  return (
    <>
      {chatHistory && chatHistory.map((chatHistoryEntry) => (
        <div>
          <label htmlFor="chat-input">
            Chat Input:
            <span id="chat-input">
              {' '}
              {chatHistoryEntry.input}
            </span>
          </label>
          <br />
          <label htmlFor="chat-output">
            Chat Output:
            <span id="chat-output">
              {' '}
              {chatHistoryEntry.output}
            </span>
          </label>
        </div>
      ))}
    </>
  );
};

export default ChatHistory;
