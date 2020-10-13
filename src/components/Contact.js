import React from 'react';
import './Contact.css';

let online = true;

const offlineLogo = <span className="status-offline" />;
const onlineLogo = <span className="status-online" />;


function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name} />
      <div className="status">
        <h1 className="name">{props.name}</h1>
        <p className="status-text">{props.online ? "Online" : "Offline "}</p>
        <span> {props.online ? onlineLogo : offlineLogo}</span>
      </div>
    </div>

  )
}

export default Contact;