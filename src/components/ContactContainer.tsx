import { Component, ReactNode } from "react";
import UserBar from "./UserBar";

class ContactContainer extends Component {
  render(): ReactNode {
    return (
      <div id="contact-container" className="h-full w-10 bg-cyan-950">
        <UserBar />
      </div>
    );
  }
}

export default ContactContainer;
