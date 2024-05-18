"use client";

import { io } from "socket.io-client";
import { ReactNode, useEffect } from "react";
import ChatContainer from "./ChatContainer";
import ContactContainer from "./ContactContainer";

const App = (): ReactNode => {
  useEffect(() => {
    const socket = io();

    return () => {
      socket.close();
    };
  }, []);

  return (
    <>
      <ContactContainer />
      <ChatContainer profile="/img/profile/luffy.jpg" />
    </>
  );
};

export default App;
