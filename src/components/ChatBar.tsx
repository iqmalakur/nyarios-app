import { Component, ReactNode } from "react";
import { ChatBarProps } from "../types/ComponentProps";

class ChatBar extends Component<ChatBarProps> {
  render(): ReactNode {
    const { name, profile, status } = this.props;

    return (
      <div className="px-8 py-2 bg-slate-700 absolute top-0 left-0 right-0 flex">
        <div className="mx-5">
          <img
            src={profile}
            alt="Profile"
            className="w-12 h-12 rounded-full border border-slate-800"
          />
        </div>
        <div className="text-white">
          <h3 className="text-lg">{name}</h3>
          <p className="text-xs text-slate-400">{status}</p>
        </div>
      </div>
    );
  }
}

export default ChatBar;
