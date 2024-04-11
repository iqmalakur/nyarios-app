import { FormEvent, RefObject } from "react";

export interface ChatBarProps {
  name: string;
  profile: string;
  status: string;
}

export interface ChatProps {
  message: string;
  profile: string;
  date: Date;
  role: "sender" | "receiver";
  isFirstChatOnGroup?: boolean;
}

export interface ChatContainerProps {
  profile: string;
}

export interface ChatListProps {
  chatListRef: RefObject<HTMLDivElement>;
  chats: ChatProps[];
}

export interface UserContactProps {
  profile: string;
  name: string;
  lastChat: string;
  lastChatDate: Date;
}

export interface ChatInputProps {
  onSendChat: (event: FormEvent, chatInput: HTMLInputElement | null) => void;
}
