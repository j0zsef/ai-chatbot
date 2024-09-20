import React, { useEffect } from 'react';
import getChatResponse from '@/lib/chat';
import {
  List, ListSubheader, Typography, Divider,
} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SmartToySharpIcon from '@mui/icons-material/SmartToySharp';
import ChatOutput from '@/components/ChatOutput';
import { useChatHistory } from '../contexts/ChatHistoryContext';

interface ChatHistoryProps {
  chatInput: string;
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ chatInput }) => {
  const { chatHistory, setChatHistory } = useChatHistory();

  useEffect(() => {
    if (!chatInput) return;

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
    <>
      <Typography variant="h6" style={{ paddingLeft: '16px', backgroundColor: '#f5f5f5' }}>
        Chat History
      </Typography>
      <Divider />
      { chatHistory.map((chatHistoryEntry) => (
        <List key={chatHistoryEntry.time.getTime()} style={{ display: 'flex', flexDirection: 'column' }}>
          <ListSubheader>{chatHistoryEntry.time.toLocaleString()}</ListSubheader>
          <ChatOutput backGroundColor="#e0f7fa" chatHistory={chatHistoryEntry.input} icon={<AccountBoxIcon />} />
          <br />
          <ChatOutput backGroundColor="#f1f8e9" chatHistory={chatHistoryEntry.output} icon={<SmartToySharpIcon />} style={{ alignSelf: 'flex-end' }} />
        </List>
      ))}
    </>
  );
};

export default ChatHistory;
