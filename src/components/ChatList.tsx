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
          className="w-full h-fit max-h-full px-20 py-4 overflow-x-hidden overflow-y-auto small-scrollbar"
          ref={(div) => this.handleScrollChat(div, this.props.chatListRef)}
        >
          {chats.map((chat, key) => {
            if (key === 0) {
              return (
                <Chat
                  message={chat.message}
                  profile={chat.profile}
                  time={chat.time}
                  role={chat.role}
                  key={key}
                  isFirstChatOnGroup={true}
                />
              );
            }

            if (chat.role === chats[key - 1].role) {
              return (
                <Chat
                  message={chat.message}
                  profile={chat.profile}
                  time={chat.time}
                  role={chat.role}
                  key={key}
                  isFirstChatOnGroup={false}
                />
              );
            }

            return (
              <Chat
                message={chat.message}
                profile={chat.profile}
                time={chat.time}
                role={chat.role}
                key={key}
                isFirstChatOnGroup={true}
              />
            );
          })}
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
