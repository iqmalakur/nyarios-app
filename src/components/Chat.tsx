import { Component, ReactNode } from "react";
import { ChatProps } from "../types/ComponentProps";

class Chat extends Component<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
    this.filterLongMessage = this.filterLongMessage.bind(this);
  }

  render(): ReactNode {
    const { message, role, time, profile, isFirstChatOnGroup } = this.props;
    const shortMessage = message.length < 50;
    const filteredMessage = message.replace(
      /[^\s]{55,}/gm,
      this.filterLongMessage
    );

    return (
      <div className="flex relative">
        <div
          className={`chat text-white max-w-96 rounded shadow relative ${role} ${
            shortMessage ? "p-4 pr-12" : "p-4 pb-7"
          } ${isFirstChatOnGroup ? "mt-2 first-on-group" : "mt-1"}`}
        >
          <p>{filteredMessage}</p>
          <span
            className={`text-xs text-slate-300 absolute right-2 ${
              shortMessage ? "bottom-3" : "bottom-2"
            }`}
          >
            {time}
          </span>
        </div>
        {isFirstChatOnGroup ? (
          <img
            src={profile}
            alt="User"
            className={`w-8 h-8 rounded-full border border-solid border-slate-800 shadow ${role}`}
          />
        ) : (
          ""
        )}
      </div>
    );
  }

  filterLongMessage(matchedMessage: string): string {
    const maxMessageLength = 55;
    let result = matchedMessage;

    if (result.length > maxMessageLength) {
      result =
        result.substring(0, maxMessageLength) +
        "\n" +
        result.substring(maxMessageLength);

      if (result.match(/[^\s]{56,}/gm)) {
        result = result.replace(/[^\s]{55,}/gm, this.filterLongMessage);
      }
    }

    return result;
  }
}

export default Chat;
