import { ReactNode } from "react";
import { ChatProps } from "@/types/ComponentProps";
import formatTime from "@/utilities/formatTime";

const Chat = (props: ChatProps): ReactNode => {
  const { message, role, date, profile, isFirstChatOnGroup } = props;
  const shortMessage = message.length < 50;

  return (
    <div className="flex relative">
      <div
        className={`chat text-white max-w-96 rounded shadow relative ${role} ${
          shortMessage ? "p-4 pr-12" : "p-4 pb-7"
        } ${isFirstChatOnGroup ? "mt-2 first-on-group" : "mt-1"}`}
      >
        <p className="break-words">{message}</p>
        <span
          className={`text-xs text-slate-300 absolute right-2 ${
            shortMessage ? "bottom-3" : "bottom-2"
          }`}
        >
          {formatTime(date)}
        </span>
      </div>
      {isFirstChatOnGroup ? (
        <img
          src={profile}
          alt="User"
          className={`w-8 h-8 rounded-full border border-solid border-slate-800 shadow absolute top-2 ${role}`}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Chat;
