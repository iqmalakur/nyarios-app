interface ChatProps {
  message: string;
  profile: string;
  time: string;
  role: "sender" | "receiver";
}

export default ChatProps;
