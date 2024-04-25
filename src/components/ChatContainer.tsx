import { FormEvent, ReactNode, useRef, useState } from "react";
import { ChatContainerProps, ChatProps } from "@/types/ComponentProps";
import ChatInput from "./ChatInput";
import ChatList from "./ChatList";
import ChatBar from "./ChatBar";

const ChatContainer = (props: ChatContainerProps): ReactNode => {
  const chatListRef = useRef<HTMLDivElement>();
  const [chats, setChats] = useState([
    {
      message:
        "Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor",
      profile: "/img/profile/luffy.jpg",
      date: new Date("2024-04-06 14:30:00"),
      role: "sender",
    },
    {
      message:
        "Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor",
      profile: "/img/profile/zoro.jpg",
      date: new Date("2024-04-09 14:30:00"),
      role: "receiver",
    },
    {
      message:
        "Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor",
      profile: "/img/profile/zoro.jpg",
      date: new Date("2024-04-09 14:35:00"),
      role: "receiver",
    },
    {
      message:
        "Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor lkjkldsj jsdlfkjslad jslakd jfd",
      profile: "/img/profile/luffy.jpg",
      date: new Date("2024-04-10 10:30:00"),
      role: "sender",
    },
    {
      message:
        "Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor",
      profile: "/img/profile/zoro.jpg",
      date: new Date("2024-04-10 10:35:00"),
      role: "receiver",
    },
  ] as ChatProps[]);

  const handleSendChat = (
    event: FormEvent,
    chatInput: HTMLInputElement | undefined
  ): void => {
    event.preventDefault();

    if (chatInput && chatInput.value !== "") {
      const chat = {
        message: chatInput.value,
        date: new Date(),
        role: "sender",
        profile: props.profile,
      } as ChatProps;

      setChats((chats) => [...chats, chat]);

      chatInput.value = "";

      const div = chatListRef.current;
      if (div) {
        div.scrollTo({
          left: 0,
          top: div.scrollHeight,
          behavior: "instant",
        });
      }
    }
  };

  return (
    <div id="chat-container" className="h-full pt-16 relative">
      <ChatBar
        name="Roronoa Zoro"
        profile="/img/profile/zoro.jpg"
        status="Online"
      />
      <ChatList chats={chats} chatListRef={chatListRef} />
      <ChatInput onSendChat={handleSendChat} />
    </div>
  );
};

export default ChatContainer;
