import { Component, ReactNode } from "react";
import { UserContactProps } from "../types/ComponentProps";
import formatTime from "../utilities/formatTime";

class Contact extends Component<UserContactProps> {
  render(): ReactNode {
    const { profile, name, lastChat, lastChatDate } = this.props;

    return (
      <div className="contact text-white px-3 py-4 shadow relative flex">
        <div className="contact-profile mr-3 flex justify-center items-center">
          <img
            src={profile}
            alt="Contact Profile"
            className="w-12 h-12 rounded-full border border-solid border-slate-800"
          />
        </div>
        <div className="contact-info">
          <h3 className="text-lg">{name}</h3>
          <p className="text-sm">{lastChat}</p>
        </div>
        <div className="contact-date">
          <span className="text-xs text-right text-slate-400 absolute top-5 right-3">
            {formatTime(lastChatDate)}
          </span>
        </div>
      </div>
    );
  }
}

export default Contact;
