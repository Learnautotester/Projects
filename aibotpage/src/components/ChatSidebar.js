import React, { useContext } from 'react';
import { Drawer } from '@mui/material';
import { LightThemeContext } from '../contexts/ThemeContext';
import { Link } from "react-router-dom";

const ChatSidebar = ({ isMobile, isDrawerOpen, toggleDrawer, startNewChat, handlePastConvo }) => {
  const { lightTheme } = useContext(LightThemeContext)

  return (
    <>
      {isMobile ? (
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)} className='drawer' PaperProps={{
          style: {
            backgroundColor: 'black',
            color: 'white',
          },
        }}>
          <SidebarContent startNewChat={startNewChat} handlePastConvo={handlePastConvo} />
        </Drawer>
      ) : (
        <div className='drawer' style={{ background: !lightTheme && 'black' }}>
          <SidebarContent startNewChat={startNewChat} handlePastConvo={handlePastConvo} />
        </div>
      )}
    </>
  );
};

const SidebarContent = ({ startNewChat, handlePastConvo }) => {
  const { lightTheme } = useContext(LightThemeContext);

  return (
    <div>
      <div
        className="drawer-header"
        style={{ background: !lightTheme && "black" }}
      >
        <img src="/images/logo2.svg" alt="logo2" className="logo-img" />

        {/* Link for New Chat (keeps UI same) */}
        <Link
          to="/"
          className="new-chat-link"
          onClick={startNewChat}
          style={{
            color: "inherit",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>New Chat</span>

          {lightTheme ? (
            <img
              src="/images/new-chat.svg"
              className="new-chat-button"
              alt="new-chat"
            />
          ) : (
            <img
              src="/images/new-chat-white.svg"
              className="new-chat-button"
              alt="new-chat-white"
            />
          )}
        </Link>
      </div>

      {/* Link styled like button for Past Conversations */}
      <Link
        to="/history"
        className="past-convo-link past-convo-button"
        onClick={handlePastConvo}
        style={{
          display: "block",
          textAlign: "center",
          background: !lightTheme && "magenta",
          color: !lightTheme && "white",
          textDecoration: "none",
        }}
      >
        Past Conversations
      </Link>
    </div>
  );
};

export default ChatSidebar;
