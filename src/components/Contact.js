import React from 'react';
import './Contact.css';

let online = true;

const offlineLogo = <span className="status-offline" />;
const onlineLogo = <span className="status-online" />;


function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src="https://randomuser.me/api/portraits/women/84.jpg" alt="avatar" />
      <div className="status">
        <h1 className="name">Anita Sutton</h1>
        <p className="status-text">{online ? "Online" : "Offline "}</p>
        <span> {online ? onlineLogo : offlineLogo}</span>
      </div>
    </div>

  )
}

export default Contact;