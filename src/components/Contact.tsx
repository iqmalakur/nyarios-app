import { Component, ReactNode } from "react";

class Contact extends Component {
  render(): ReactNode {
    return (
      <div className="contact text-white px-3 py-4 shadow relative flex">
        <div className="contact-profile mr-3 flex justify-center items-center">
          <img
            src="/img/profile/aliceataraxia.jpg"
            alt="Contact Profile"
            className="w-12 h-12 rounded-full border border-solid border-slate-800"
          />
        </div>
        <div className="contact-info">
          <h3 className="text-lg">Alice Von Ataraxia</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet, consect...</p>
        </div>
        <div className="contact-date">
          <span className="text-xs text-right text-slate-400 absolute top-6 right-3">
            08.26
          </span>
        </div>
      </div>
    );
  }
}

export default Contact;
