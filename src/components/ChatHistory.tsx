import React, { useEffect } from 'react';
import getChatResponse from '@/lib/chat';
import {
  List, ListItem, ListItemAvatar, ListItemText, ListSubheader,
} from '@mui/material';
import { ListGroup } from 'react-bootstrap';
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
        <ListGroup>
          <ListSubheader>{chatHistoryEntry.time.toLocaleString()}</ListSubheader>
          <ListItem id="chat-input">
            <ListItemAvatar>Chat Input:</ListItemAvatar>
            <ListItemText>
              {chatHistoryEntry.input}
            </ListItemText>
          </ListItem>
          <br />
          <ListItem id="chat-output">
            <ListItemAvatar>Chat Output:</ListItemAvatar>
            <ListItemText>
              {chatHistoryEntry.output}
            </ListItemText>
          </ListItem>
        </ListGroup>
      </List>
    ))
  );
};

export default ChatHistory;
