import { Component, ReactNode } from "react";
import ChatContainer from "./ChatContainer";
import ContactContainer from "./ContactContainer";
import "../assets/css/App.css";

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <ContactContainer />
        <ChatContainer profile="/img/profile/luffy.jpg" />
      </>
    );
  }
}

export default App;
