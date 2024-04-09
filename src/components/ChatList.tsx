import { Component, ReactNode } from "react";
import Chat from "./Chat";

class ChatList extends Component {
  render(): ReactNode {
    return (
      <div className="h-[78%] flex items-end">
        <div
          className="w-full h-fit max-h-full px-24 overflow-x-hidden overflow-y-auto small-scrollbar"
          ref={this.handleScrollChat}
        >
          <Chat
            message="Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor lkjkldsj jsdlfkjslad jslakd jfd"
            profile="/img/profile/luffy.jpg"
            time="08.50"
            role="sender"
          />
          <Chat
            message="Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor"
            profile="/img/profile/zoro.jpg"
            time="08.51"
            role="receiver"
          />
          <Chat
            message="Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor lkjkldsj jsdlfkjslad jslakd jfd"
            profile="/img/profile/luffy.jpg"
            time="08.50"
            role="sender"
          />
          <Chat
            message="Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor"
            profile="/img/profile/zoro.jpg"
            time="08.51"
            role="receiver"
          />
          <Chat
            message="Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor lkjkldsj jsdlfkjslad jslakd jfd"
            profile="/img/profile/luffy.jpg"
            time="08.50"
            role="sender"
          />
          <Chat
            message="Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor"
            profile="/img/profile/zoro.jpg"
            time="08.51"
            role="receiver"
          />
          <Chat
            message="Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor lkjkldsj jsdlfkjslad jslakd jfd"
            profile="/img/profile/luffy.jpg"
            time="08.50"
            role="sender"
          />
          <Chat
            message="Lorem Ipsum Dolor Sit Amet Consectetur Adipisting Elit Et Labor"
            profile="/img/profile/zoro.jpg"
            time="08.51"
            role="receiver"
          />
        </div>
      </div>
    );
  }

  handleScrollChat(div: HTMLDivElement) {
    div.scrollTo({
      left: 0,
      top: div.scrollHeight,
      behavior: "instant",
    });
  }
}

export default ChatList;
