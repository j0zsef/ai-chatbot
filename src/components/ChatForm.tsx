'use client';

import React from 'react';
import {
  TextField, Button, Box,
} from '@mui/material';

interface ChatFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  input: string;
}

const ChatForm: React.FC<ChatFormProps> = ({ handleSubmit, handleInputChange, input }) => {
  return (
    <Box sx={{
      display: 'flex', marginTop: 'auto', borderTop: '2px solid #f5f5f5',
    }}
    >
      <form onSubmit={handleSubmit} style={{ display: 'flex', width: '100%' }}>
        <TextField
          required
          id="chat-input"
          onChange={handleInputChange}
          placeholder="Enter your message"
          variant="outlined"
          value={input}
          fullWidth
          sx={{ flexGrow: 1 }}
        />
        <Button
          type="submit"
          color="primary"
          size="large"
          variant="contained"
        >
          Send
        </Button>
      </form>
    </Box>
  );
};

export default ChatForm;
