import React, { useEffect } from 'react';
import getChatResponse from '@/lib/chat';
import {
  List, ListItem, ListItemAvatar, ListItemText, ListSubheader, Avatar, Paper,
} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SmartToySharpIcon from '@mui/icons-material/SmartToySharp';
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
      <List key={chatHistoryEntry.time.getTime()}>
        <List>
          <ListSubheader>{chatHistoryEntry.time.toLocaleString()}</ListSubheader>
          <Paper
            elevation={3}
            style={{
              padding: '10px', borderRadius: '10px', backgroundColor: '#e0f7fa', width: 'fit-content',
            }}
          >
            <ListItem id="chat-input">
              <ListItemAvatar>
                <Avatar>
                  <AccountBoxIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>
                {chatHistoryEntry.input}
              </ListItemText>
            </ListItem>
          </Paper>
          <br />
          <Paper
            elevation={3}
            style={{
              padding: '10px', borderRadius: '10px', backgroundColor: '#f1f8e9', width: 'fit-content',
            }}
          >
            <ListItem id="chat-output" style={{ justifyContent: 'flex-end' }}>
              <ListItemAvatar>
                <Avatar>
                  <SmartToySharpIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText style={{ flex: 'inherit' }}>
                {chatHistoryEntry.output}
              </ListItemText>
            </ListItem>
          </Paper>
        </List>
      </List>
    ))
  );
};

export default ChatHistory;
