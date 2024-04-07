import { Component, ReactNode } from "react";
import UserBar from "./UserBar";
import ContactList from "./ContactList";

class ContactContainer extends Component {
  render(): ReactNode {
    return (
      <div id="contact-container" className="h-full w-10 bg-cyan-950">
        <UserBar />
        <ContactList />
      </div>
    );
  }
}

export default ContactContainer;
