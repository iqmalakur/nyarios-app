import { Component, ReactNode, RefObject } from "react";
import Chat from "./Chat";
import { ChatListProps, ChatProps } from "../types/ComponentProps";
import ChatDivider from "./ChatDivider";

class ChatList extends Component<ChatListProps> {
  constructor(props: ChatListProps) {
    super(props);
  }

  render(): ReactNode {
    const { chats } = this.props;

    const sortedChats = [...chats];
    sortedChats.sort((a, b) => a.date.getTime() - b.date.getTime());

    const chatByDates: Array<ChatProps | Date> = [];

    sortedChats.map((chat, index) => {
      if (index === 0) {
        chatByDates.push(chat.date);
      } else if (!this.isSameDates(chat.date, sortedChats[index - 1].date)) {
        chatByDates.push(chat.date);
      }

      chatByDates.push(chat);
    });

    return (
      <div className="h-[78%] flex items-end">
        <div
          className="w-full h-fit max-h-full px-20 py-4 overflow-x-hidden overflow-y-auto small-scrollbar"
          ref={(div) => this.handleScrollChat(div, this.props.chatListRef)}
        >
          {chatByDates.map((element, key) => {
            if (element instanceof Date) {
              console.log("it is date");
              return <ChatDivider date={element} key={key} />;
            }

            const chat = element;
            const elementBefore = chatByDates[key - 1];
            let isFirstChatOnGroup = true;

            if (
              key !== 1 &&
              !(elementBefore instanceof Date) &&
              chat.role === elementBefore.role
            ) {
              isFirstChatOnGroup = false;
            }

            return (
              <Chat
                message={chat.message}
                profile={chat.profile}
                date={chat.date}
                role={chat.role}
                key={key}
                isFirstChatOnGroup={isFirstChatOnGroup}
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

  isSameDates(a: Date, b: Date): boolean {
    const isYearSame = a.getFullYear() === b.getFullYear();
    const isMonthSame = a.getMonth() === b.getMonth();
    const isDaySame = a.getDate() === b.getDate();

    return isYearSame && isMonthSame && isDaySame;
  }
}

export default ChatList;
