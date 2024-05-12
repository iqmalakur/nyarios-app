"use client";

import { ReactNode } from "react";
import { ChatDividerProps } from "@/types/ComponentProps";
import getDayFromNumber from "@/utilities/getDayFromNumber";

const ChatDivider = ({ date }: ChatDividerProps): ReactNode => {
  const now = new Date();

  let text = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;

  if (now.getDate() === date.getDate()) {
    text = "Today";
  } else if (now.getDate() - 1 === date.getDate()) {
    text = "Yesterday";
  } else if (now.getDate() - date.getDate() < 5) {
    text = getDayFromNumber(date.getDay());
  }

  return (
    <div className="chat-divider flex justify-center items-center">
      <span className="text-white text-xs bg-sky-950 px-4 py-2 my-4 rounded-full inline-block">
        {text}
      </span>
    </div>
  );
};

export default ChatDivider;
