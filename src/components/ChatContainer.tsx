import { Component, FormEvent, ReactNode, RefObject, createRef } from "react";
import { ChatContainerProps, ChatProps } from "../types/ComponentProps";
import ChatInput from "./ChatInput";
import ChatList from "./ChatList";
import ChatBar from "./ChatBar";
import formatTime from "../utilities/formatTime";
import { ChatContainerState } from "../types/ComponentStates";

class ChatContainer extends Component<ChatContainerProps, ChatContainerState> {
  private chatListRef: RefObject<HTMLDivElement>;

  constructor(props: ChatContainerProps) {
    super(props);
    this.chatListRef = createRef<HTMLDivElement>();

    this.state = {
      chats: [
        {
          message:
            "Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor lkjkldsj jsdlfkjslad jslakd jfd",
          profile: "/img/profile/luffy.jpg",
          time: "08.50",
          role: "sender",
        },
        {
          message:
            "Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor",
          profile: "/img/profile/zoro.jpg",
          time: "08.51",
          role: "receiver",
        },
      ],
    };

    this.handleSendChat = this.handleSendChat.bind(this);
  }

  render(): ReactNode {
    return (
      <div id="chat-container" className="h-full">
        <ChatBar
          name="Roronoa Zoro"
          profile="/img/profile/zoro.jpg"
          status="Online"
        />
        <ChatList chats={this.state.chats} chatListRef={this.chatListRef} />
        <ChatInput onSendChat={this.handleSendChat} />
      </div>
    );
  }

  handleSendChat(event: FormEvent, chatInput: HTMLInputElement | null) {
    event.preventDefault();

    if (chatInput) {
      const chat = {
        message: chatInput.value,
        time: formatTime(new Date()),
        role: "sender",
        profile: this.props.profile,
      } as ChatProps;

      this.setState({
        chats: [...this.state.chats, chat],
      });

      chatInput.value = "";

      const div = this.chatListRef.current;
      if (div) {
        div.scrollTo({
          left: 0,
          top: div.scrollHeight,
          behavior: "instant",
        });
      }
    }
  }
}

export default ChatContainer;
