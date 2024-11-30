import React from "react";
import "./../styles/contactcard.css"

function ContactCard(props) {
    return (
      <div className="wrapper">
        <div className="contact-card">
          <h2>{props.name}</h2>
          <div className="container">
            <p className="field">Email:</p>
            <p className="content">{props.email}</p>
          </div>

          <div className="container">
            <p className="field">Phone:</p>
            <p className="content">{props.phone}</p>
          </div>
        </div>
      </div>
    );
};





export default ContactCard