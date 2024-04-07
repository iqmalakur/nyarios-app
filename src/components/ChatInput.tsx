import { Component, ReactNode } from "react";

class ChatInput extends Component {
  render(): ReactNode {
    return (
      <div className="h-[15%] flex justify-center items-center">
        <form action="" className="w-[80%] flex justify-center items-center">
          <input
            type="text"
            className="w-3/4 h-12 bg-slate-900 text-white text-lg outline-none shadow px-5 mx-5 rounded-full"
            placeholder="Type chat here..."
          />
          <button className="w-14 h-14 bg-sky-600 shadow rounded-full flex justify-center items-center">
            <img src="/img/icon/send.png" alt="Send" />
          </button>
        </form>
      </div>
    );
  }
}

export default ChatInput;
