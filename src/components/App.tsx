import { ReactNode } from "react";
import ChatContainer from "./ChatContainer";
import ContactContainer from "./ContactContainer";

const App = (): ReactNode => {
  return (
    <>
      <ContactContainer />
      <ChatContainer profile="/img/profile/luffy.jpg" />
    </>
  );
};

export default App;
