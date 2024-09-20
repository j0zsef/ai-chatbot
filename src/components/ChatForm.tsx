'use client';

import React, { useState } from 'react';
import {
  Grid2, Divider, Paper, TextField, Button, Container,
} from '@mui/material';
import ChatHistory from './ChatHistory';

const ChatForm = () => {
  const [chatInput, setChatInput] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem('chat-input') as HTMLInputElement;
    if (!input || !input.value.trim()) return;
    setChatInput(input.value.trim());
    input.value = '';
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const input = event.target;
    input.value = '';
  };

  return (
    <Grid2 container>
      <Container>
        <Paper square={false}>
          <ChatHistory chatInput={chatInput} />
          <Divider />
          <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              required
              id="chat-input"
              defaultValue="Enter your message"
              variant="standard"
              onFocus={handleFocus}
              style={{ paddingLeft: '16px', flexGrow: 1 }}
            />
            <Button type="submit" style={{ marginLeft: 'auto' }}>Send</Button>
          </form>
        </Paper>
      </Container>
    </Grid2>
  );
};

export default ChatForm;
