import { Component, ReactNode } from "react";
import ChatInput from "./ChatInput";
import ChatList from "./ChatList";

class ChatContainer extends Component {
  render(): ReactNode {
    return (
      <div id="chat-container" className="h-full">
        <ChatList />
        <ChatInput />
      </div>
    );
  }
}

export default ChatContainer;
