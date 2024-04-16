import { Component, ReactNode, RefObject } from "react";
import Chat from "./Chat";
import { ChatListProps } from "../types/ComponentProps";
import ChatDivider from "./ChatDivider";

class ChatList extends Component<ChatListProps> {
  constructor(props: ChatListProps) {
    super(props);
  }

  render(): ReactNode {
    const { chats } = this.props;

    const sortedChats = [...chats];
    sortedChats.sort((a, b) => a.date.getTime() - b.date.getTime());

    const chatListItems: ReactNode[] = [];

    sortedChats.map((chat, key) => {
      if (
        key === 0 ||
        !this.isSameDates(chat.date, sortedChats[key - 1].date)
      ) {
        chatListItems.push(
          <ChatDivider date={chat.date} key={"divider-" + key} />
        );
      }

      let isFirstChatOnGroup = true;
      if (key !== 0 && chat.role === sortedChats[key - 1].role) {
        isFirstChatOnGroup = false;
      }

      chatListItems.push(
        <Chat
          message={chat.message}
          profile={chat.profile}
          date={chat.date}
          role={chat.role}
          key={"chat-" + key}
          isFirstChatOnGroup={isFirstChatOnGroup}
        />
      );
    });

    return (
      <div className="h-full pb-16 flex items-end">
        <div
          className="w-full h-fit max-h-full px-20 py-4 overflow-x-hidden overflow-y-auto small-scrollbar"
          ref={(div) => this.handleScrollChat(div, this.props.chatListRef)}
        >
          {chatListItems}
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

  isSameDates(a: Date, b: Date): boolean {
    const isYearSame = a.getFullYear() === b.getFullYear();
    const isMonthSame = a.getMonth() === b.getMonth();
    const isDaySame = a.getDate() === b.getDate();

    return isYearSame && isMonthSame && isDaySame;
  }
}

export default ChatList;
