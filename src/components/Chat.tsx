import { Component, ReactNode } from "react";
import ChatProps from "../types/ChatProps";

class Chat extends Component<ChatProps> {
  render(): ReactNode {
    const { message, role, time, profile } = this.props;

    return (
      <div className="flex relative">
        <div
          className={`chat text-white max-w-96 my-4 p-4 pb-7 rounded shadow relative ${role}`}
        >
          <p>{message}</p>
          <span className="text-xs text-slate-300 absolute bottom-2 right-2">
            {time}
          </span>
        </div>
        <img
          src={profile}
          alt="User"
          className={`w-8 h-8 rounded-full border border-solid border-slate-800 shadow ${role}`}
        />
      </div>
    );
  }
}

export default Chat;
