import { ReactNode } from "react";
import Contact from "./Contact";
import { UserContactProps } from "@/types/ComponentProps";

let dummyContacts: UserContactProps[] = [];
for (let i = 0; i < 20; i++) {
  dummyContacts.push({
    name: "Roronoa Zoro",
    profile: "/img/profile/zoro.jpg",
    lastChat: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor",
    lastChatDate: new Date(),
  });
}

const ContactList = (): ReactNode => {
  const contacts: UserContactProps[] = dummyContacts;

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
};

export default ContactList;
