'use client';

import React, { useRef, useEffect } from 'react';
import {
  List, ListSubheader, Typography, Divider,
} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SmartToySharpIcon from '@mui/icons-material/SmartToySharp';
import ChatOutput from '@/components/ChatOutput';
import { Message } from 'ai';

interface ChatHistoryProps {
  chatHistory: Message[];
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ chatHistory }) => {
  const latestMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);

  return (
    <>
      <Typography variant="h6" sx={{ paddingLeft: '16px', backgroundColor: '#f5f5f5' }}>
        Chat History
      </Typography>
      <Divider />
      { chatHistory.map((chatHistoryEntry, index) => (
        <List key={chatHistoryEntry.id} sx={{ display: 'flex', flexDirection: 'column' }} ref={index === chatHistory.length - 1 ? latestMessageRef : null}>
          <ListSubheader>{chatHistoryEntry.createdAt?.toLocaleString()}</ListSubheader>
          { chatHistoryEntry.role === 'user'
          && (
          <ChatOutput backGroundColor="#e0f7fa" icon={<AccountBoxIcon />}>
            {chatHistoryEntry.content}
          </ChatOutput>
          )}
          { chatHistoryEntry.role !== 'user'
              && (
              <ChatOutput backGroundColor="#f1f8e9" icon={<SmartToySharpIcon />}>
                {chatHistoryEntry.content}
              </ChatOutput>
              )}
        </List>
      ))}
    </>
  );
};

export default ChatHistory;
