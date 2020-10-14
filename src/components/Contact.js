import React from 'react';
import './Contact.css';

let online = true;

const offlineLogo = <span className="status-offline" />;
const onlineLogo = <span className="status-online" />;


// function Contact(props) {
//   return (
//     <div className="Contact">
//       <img className="avatar" src={props.avatar} alt={props.name} />
//       <div className="status">
//         <h1 className="name">{props.name}</h1>
//         <p className="status-text">{props.online ? "Online" : "Offline "}</p>
//         <span> {props.online ? onlineLogo : offlineLogo}</span>
//       </div>
//     </div>

//   )
//}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    }
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name} />
        <div className="status" onClick={(event) => {
          const newIndicator = !this.state.online;
          this.setState({ online: newIndicator });
        }}>
          <h1 className="name">{this.props.name}</h1>
          <p className="status-text">{this.state.online ? "Online" : "Offline "}</p>
          <span> {this.state.online ? onlineLogo : offlineLogo}</span>
        </div>
      </div>
    )
  }
}

export default Contact;