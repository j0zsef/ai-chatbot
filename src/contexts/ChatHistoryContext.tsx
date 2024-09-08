import React, {
  createContext, useState, useContext, ReactNode, useMemo,
} from 'react';
import { ChatHistoryEntryT } from '../types/ChatHistoryT';

interface ChatHistoryContextType {
  chatHistory: ChatHistoryEntryT[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatHistoryEntryT[]>>;
}

const ChatHistoryContext = createContext<ChatHistoryContextType | undefined>(undefined);

export const ChatHistoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [chatHistory, setChatHistory] = useState<ChatHistoryEntryT[]>([]);

  const value = useMemo(() => ({
    chatHistory,
    setChatHistory,
  }), [chatHistory]);

  return (
    <ChatHistoryContext.Provider value={value}>
      {children}
    </ChatHistoryContext.Provider>
  );
};

export const useChatHistory = (): ChatHistoryContextType => {
  const context = useContext(ChatHistoryContext);
  if (!context) {
    throw new Error('useChatHistory must be used within a ChatHistoryProvider');
  }
  return context;
};
