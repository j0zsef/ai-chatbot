'use client';

import ChatForm from '@/components/ChatForm';
import {
  Box,
  Grid2,
  Paper,
  Container,
} from '@mui/material';
import ChatHistory from '@/components/ChatHistory';
import React from 'react';
import { useChat } from 'ai/react';

const Home = () => {
  const {
    messages, input, handleInputChange, handleSubmit,
  } = useChat();

  return (
    <main>
      <Grid2 container sx={{ height: '98vh' }}>
        <Container>
          <Paper square={false} sx={{ height: '98vh', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
              <ChatHistory chatHistory={messages} />
            </Box>
            <ChatForm
              input={input}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </Paper>
        </Container>
      </Grid2>
    </main>
  );
};

export default Home;
