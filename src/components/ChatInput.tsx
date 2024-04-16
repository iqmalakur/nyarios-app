import { Component, ReactNode, RefObject, createRef } from "react";
import { ChatInputProps } from "../types/ComponentProps";

class ChatInput extends Component<ChatInputProps> {
  private chatInputRef: RefObject<HTMLInputElement>;

  constructor(props: ChatInputProps) {
    super(props);
    this.chatInputRef = createRef<HTMLInputElement>();
  }

  render(): ReactNode {
    const { onSendChat } = this.props;
    return (
      <div className="pb-4 absolute bottom-0 left-0 right-0 flex justify-center items-start">
        <form
          action=""
          className="w-[80%] flex justify-center items-center"
          onSubmit={(event) => onSendChat(event, this.chatInputRef.current)}
        >
          <input
            type="text"
            ref={this.chatInputRef}
            className="w-3/4 h-12 bg-slate-900 text-white text-lg outline-none shadow px-5 mx-5 rounded-full"
            autoFocus={true}
            placeholder="Type chat here..."
          />
          <button className="w-14 h-14 bg-sky-600 shadow rounded-full flex justify-center items-center">
            <img src="/img/icon/send.png" alt="Send" />
          </button>
        </form>
      </div>
    );
  }
}

export default ChatInput;
