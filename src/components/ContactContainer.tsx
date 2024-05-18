"use client";

import { ReactNode } from "react";
import UserBar from "./UserBar";
import ContactList from "./ContactList";

const ContactContainer = (): ReactNode => {
  return (
    <div id="contact-container" className="h-full w-10 bg-cyan-950">
      <UserBar />
      <ContactList />
    </div>
  );
};

export default ContactContainer;
