import { Component, ReactNode } from "react";
import Contact from "./Contact";
import UserContactProps from "../types/UserContactProps";

class ContactList extends Component {
  render(): ReactNode {
    const contacts: UserContactProps[] = [
      {
        name: "Roronoa Zoro",
        profile: "/img/profile/zoro.jpg",
        lastChat: "Lorem ipsum dolor sit amet, consect...",
        lastChatDate: new Date(),
      },
      {
        name: "Roronoa Zoro",
        profile: "/img/profile/zoro.jpg",
        lastChat: "Lorem ipsum dolor sit amet, consect...",
        lastChatDate: new Date(),
      },
      {
        name: "Roronoa Zoro",
        profile: "/img/profile/zoro.jpg",
        lastChat: "Lorem ipsum dolor sit amet, consect...",
        lastChatDate: new Date(),
      },
      {
        name: "Roronoa Zoro",
        profile: "/img/profile/zoro.jpg",
        lastChat: "Lorem ipsum dolor sit amet, consect...",
        lastChatDate: new Date(),
      },
      {
        name: "Roronoa Zoro",
        profile: "/img/profile/zoro.jpg",
        lastChat: "Lorem ipsum dolor sit amet, consect...",
        lastChatDate: new Date(),
      },
      {
        name: "Roronoa Zoro",
        profile: "/img/profile/zoro.jpg",
        lastChat: "Lorem ipsum dolor sit amet, consect...",
        lastChatDate: new Date(),
      },
      {
        name: "Roronoa Zoro",
        profile: "/img/profile/zoro.jpg",
        lastChat: "Lorem ipsum dolor sit amet, consect...",
        lastChatDate: new Date(),
      },
      {
        name: "Roronoa Zoro",
        profile: "/img/profile/zoro.jpg",
        lastChat: "Lorem ipsum dolor sit amet, consect...",
        lastChatDate: new Date(),
      },
      {
        name: "Roronoa Zoro",
        profile: "/img/profile/zoro.jpg",
        lastChat: "Lorem ipsum dolor sit amet, consect...",
        lastChatDate: new Date(),
      },
      {
        name: "Roronoa Zoro",
        profile: "/img/profile/zoro.jpg",
        lastChat: "Lorem ipsum dolor sit amet, consect...",
        lastChatDate: new Date(),
      },
    ];

    return (
      <div className="contact-list small-scrollbar h-[90%] overflow-x-hidden overflow-y-auto">
        {contacts.map((user) => (
          <Contact
            name={user.name}
            profile={user.profile}
            lastChat={user.lastChat}
            lastChatDate={user.lastChatDate}
          />
        ))}
      </div>
    );
  }
}

export default ContactList;
