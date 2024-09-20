'use client';

import ChatForm from '@/components/ChatForm';
import { ChatHistoryProvider } from '@/contexts/ChatHistoryContext';

const Home = () => {
  return (
    <main>
      <ChatHistoryProvider>
        <ChatForm />
      </ChatHistoryProvider>
    </main>
  );
};

export default Home;
