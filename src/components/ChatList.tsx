import { Component, ReactNode, RefObject } from "react";
import Chat from "./Chat";
import { ChatListProps } from "../types/ComponentProps";

class ChatList extends Component<ChatListProps> {
  constructor(props: ChatListProps) {
    super(props);
  }
  render(): ReactNode {
    const { chats } = this.props;

    return (
      <div className="h-[78%] flex items-end">
        <div
          className="w-full h-fit max-h-full px-20 overflow-x-hidden overflow-y-auto small-scrollbar"
          ref={(div) => this.handleScrollChat(div, this.props.chatListRef)}
        >
          {chats.map((chat, key) => (
            <Chat
              message={chat.message}
              profile={chat.profile}
              time={chat.time}
              role={chat.role}
              key={key}
            />
          ))}
        </div>
      </div>
    );
  }

  handleScrollChat(
    div: HTMLDivElement | null,
    chatListRef: RefObject<HTMLDivElement>
  ): RefObject<HTMLDivElement> {
    if (div) {
      div.scrollTo({
        left: 0,
        top: div.scrollHeight,
        behavior: "instant",
      });
    }

    return chatListRef;
  }
}

export default ChatList;
