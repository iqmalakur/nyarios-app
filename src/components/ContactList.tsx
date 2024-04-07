import { Component, ReactNode } from "react";
import Contact from "./Contact";

class ContactList extends Component {
  render(): ReactNode {
    return (
      <div className="contact-list small-scrollbar h-[90%] overflow-x-hidden overflow-y-auto">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    );
  }
}

export default ContactList;
