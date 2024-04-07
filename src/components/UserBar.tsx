import { Component, ReactNode } from "react";

class UserBar extends Component {
  render(): ReactNode {
    return (
      <div className="user-bar p-2 bg-slate-700">
        <img
          src="/img/profile/hatsunemiku.png"
          alt="User"
          className="w-10 h-10 rounded-full border border-solid border-slate-800"
        />
      </div>
    );
  }
}

export default UserBar;
