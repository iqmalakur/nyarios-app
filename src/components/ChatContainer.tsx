import { Component, ReactNode } from "react";
import ChatInput from "./ChatInput";
import ChatList from "./ChatList";
import ChatBar from "./ChatBar";

class ChatContainer extends Component {
  render(): ReactNode {
    return (
      <div id="chat-container" className="h-full">
        <ChatBar
          name="Roronoa Zoro"
          profile="/img/profile/zoro.jpg"
          status="Online"
        />
        <ChatList />
        <ChatInput />
      </div>
    );
  }
}

export default ChatContainer;
