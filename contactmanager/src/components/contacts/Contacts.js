import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <div>
              <h1 className="is-size-3">
                <span className="has-text-danger">Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact
                  id={contact.id}
                  key={contact.id}
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
