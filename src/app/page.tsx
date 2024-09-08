'use client';

import Chat from '@/components/Chat';
import { ChatHistoryProvider } from '@/contexts/ChatHistoryContext';

const Home = () => {
  return (
    <main>
      <ChatHistoryProvider>
        <Chat />
      </ChatHistoryProvider>
    </main>
  );
};

export default Home;
