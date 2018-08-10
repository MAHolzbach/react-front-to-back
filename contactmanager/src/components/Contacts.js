import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "123-456-7890"
      },
      {
        id: 2,
        name: "Karen Smith",
        email: "ksmith@gmail.com",
        phone: "123-456-7890"
      },
      {
        id: 3,
        name: "Henry Derp",
        email: "hderp@gmail.com",
        phone: "123-456-7890"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
