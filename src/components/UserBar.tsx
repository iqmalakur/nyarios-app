import { ReactNode } from "react";

const UserBar = (): ReactNode => {
  return (
    <div className="user-bar px-3 py-2 bg-slate-700 border-r border-slate-600">
      <img
        src="/img/profile/luffy.jpg"
        alt="User"
        className="w-12 h-12 rounded-full border border-solid border-slate-800"
      />
    </div>
  );
};

export default UserBar;
