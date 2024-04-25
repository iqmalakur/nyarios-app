import { ReactNode } from "react";
import { UserContactProps } from "@/types/ComponentProps";
import formatTime from "@/utilities/formatTime";

const Contact = (props: UserContactProps): ReactNode => {
  const { profile, name, lastChat, lastChatDate } = props;

  return (
    <div className="contact text-white px-3 py-4 shadow relative flex">
      <div className="contact-profile w-1/5 mr-2 flex justify-center items-center">
        <img
          src={profile}
          alt="Contact Profile"
          className="w-12 h-12 rounded-full border border-solid border-slate-800"
        />
      </div>
      <div className="contact-info w-4/5">
        <h3 className="text-lg">{name}</h3>
        <p className="w-full text-sm text-ellipsis overflow-hidden whitespace-nowrap">
          {lastChat}
        </p>
      </div>
      <div className="contact-date">
        <span className="text-xs text-right text-slate-400 absolute top-5 right-3">
          {formatTime(lastChatDate)}
        </span>
      </div>
    </div>
  );
};

export default Contact;
