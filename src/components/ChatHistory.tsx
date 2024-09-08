import React, { useEffect } from 'react';
import getChatResponse from '@/lib/chat';
import { useChatHistory } from '../contexts/ChatHistoryContext';

interface ChatHistoryProps {
  chatInput: string;
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ chatInput }) => {
  const { chatHistory, setChatHistory } = useChatHistory();

  useEffect(() => {
    const fetchChatResponse = async () => {
      const chatResponse = await getChatResponse(chatInput);
      const currentTime = new Date();
      setChatHistory((prevChatHistory) => {
        return [
          {
            input: chatInput,
            output: chatResponse,
            time: currentTime,
          },
          ...(prevChatHistory || []),
        ];
      });
    };

    fetchChatResponse();
  }, [chatInput, setChatHistory]);

  return (
    chatHistory && chatHistory.map((chatHistoryEntry) => (
      <div key={chatHistoryEntry.time.getTime()}>
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
        <br />
        <label htmlFor="chat-time">
          Time:
          <span id="chat-time">
            {' '}
            {chatHistoryEntry.time.toLocaleString()}
          </span>
        </label>
      </div>
    ))
  );
};

export default ChatHistory;
