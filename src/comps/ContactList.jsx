import React from "react";
import ContactCard from "./../comps/contactcard.jsx";
import "./../styles/ContactList.css"

function ContactList() {
  return (
    <div className="card-container">
      <ContactCard
        name="Merlin"
        email="camelotshero@wizardsonline.com"
        phone="+2395242783"
      />

      <ContactCard
        name="Gandalf"
        email="whitebeard@wizardsonline.com"
        phone="+4455923499"
      />

      <ContactCard
        name="Sauron"
        email="sauron24@ancientvillains.com"
        phone="+1218798323"
      />
    </div>
  );
}

export default ContactList;
