import { ReactNode } from "react";
import Chat from "./Chat";
import { ChatListProps } from "../types/ComponentProps";
import ChatDivider from "./ChatDivider";
import isSameDates from "@/utilities/isSameDates";

const ChatList = (props: ChatListProps): ReactNode => {
  const sortedChats = [...props.chats];
  sortedChats.sort((a, b) => a.date.getTime() - b.date.getTime());

  const chatListItems: ReactNode[] = [];

  sortedChats.map((chat, key) => {
    if (key === 0 || !isSameDates(chat.date, sortedChats[key - 1].date)) {
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

  const handleScrollChat = (div: HTMLDivElement | null): void => {
    if (div) {
      div.scrollTo({
        left: 0,
        top: div.scrollHeight,
        behavior: "instant",
      });
    }

    props.chatListRef.current = div as HTMLDivElement | undefined;
  };

  return (
    <div className="h-full pb-16 flex items-end">
      <div
        className="w-full h-fit max-h-full px-20 py-4 overflow-x-hidden overflow-y-auto small-scrollbar"
        ref={handleScrollChat}
      >
        {chatListItems}
      </div>
    </div>
  );
};

export default ChatList;
