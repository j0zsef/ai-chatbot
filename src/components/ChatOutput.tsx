import React from 'react';
import {
  Avatar, ListItem, ListItemAvatar, ListItemText, Paper,
} from '@mui/material';

interface ChatProps {
    backGroundColor: string;
    chatHistory: string;
    icon: React.ReactNode;
    style?: React.CSSProperties;
}

const ChatOutput: React.FC<ChatProps> = ({
  chatHistory, backGroundColor, icon, style,
}) => {
  return (
    <div style={style}>
      <Paper
        elevation={3}
        style={{
          padding: '10px', borderRadius: '10px', backgroundColor: backGroundColor, width: 'fit-content',
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              { icon }
            </Avatar>
          </ListItemAvatar>
          <ListItemText>
            {chatHistory}
          </ListItemText>
        </ListItem>
      </Paper>
    </div>
  );
};

export default ChatOutput;
