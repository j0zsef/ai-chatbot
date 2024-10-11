'use client';

import React from 'react';
import {
  Avatar, ListItem, ListItemAvatar, ListItemText, Paper,
} from '@mui/material';

interface ChatProps {
    backGroundColor: string;
    children: React.ReactNode;
    icon: React.ReactNode;
    style?: React.CSSProperties;
}

const ChatOutput: React.FC<ChatProps> = ({
  backGroundColor, children, icon, style,
}) => {
  return (
    <div style={style}>
      <Paper
        elevation={3}
        sx={{
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
            {children}
          </ListItemText>
        </ListItem>
      </Paper>
    </div>
  );
};

export default ChatOutput;
