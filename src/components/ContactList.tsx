import { Component, ReactNode } from "react";
import Contact from "./Contact";
import { UserContactProps } from "../types/ComponentProps";

class ContactList extends Component {
  render(): ReactNode {
    const contacts: UserContactProps[] = [
      {
        name: "Roronoa Zoro",
        profile: "/img/profile/zoro.jpg",
        lastChat:
          "Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor",
        lastChatDate: new Date(),
      },
      {
        name: "Roronoa Zoro",
        profile: "/img/profile/zoro.jpg",
        lastChat:
          "Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor",
        lastChatDate: new Date(),
      },
      {
        name: "Roronoa Zoro",
        profile: "/img/profile/zoro.jpg",
        lastChat:
          "Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor",
        lastChatDate: new Date(),
      },
      {
        name: "Roronoa Zoro",
        profile: "/img/profile/zoro.jpg",
        lastChat:
          "Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor",
        lastChatDate: new Date(),
      },
      {
        name: "Roronoa Zoro",
        profile: "/img/profile/zoro.jpg",
        lastChat:
          "Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor",
        lastChatDate: new Date(),
      },
      {
        name: "Roronoa Zoro",
        profile: "/img/profile/zoro.jpg",
        lastChat:
          "Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor",
        lastChatDate: new Date(),
      },
      {
        name: "Roronoa Zoro",
        profile: "/img/profile/zoro.jpg",
        lastChat:
          "Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor",
        lastChatDate: new Date(),
      },
      {
        name: "Roronoa Zoro",
        profile: "/img/profile/zoro.jpg",
        lastChat:
          "Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor",
        lastChatDate: new Date(),
      },
      {
        name: "Roronoa Zoro",
        profile: "/img/profile/zoro.jpg",
        lastChat:
          "Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor",
        lastChatDate: new Date(),
      },
      {
        name: "Roronoa Zoro",
        profile: "/img/profile/zoro.jpg",
        lastChat:
          "Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor ksdjfsdkjfskldfjsdlfjsdfjljsdklfj lsdjflksjd fklj",
        lastChatDate: new Date(),
      },
    ];

    return (
      <div className="contact-list small-scrollbar h-[90%] overflow-x-hidden overflow-y-auto">
        {contacts.map((user, key) => (
          <Contact
            name={user.name}
            profile={user.profile}
            lastChat={user.lastChat}
            lastChatDate={user.lastChatDate}
            key={key}
          />
        ))}
      </div>
    );
  }
}

export default ContactList;
