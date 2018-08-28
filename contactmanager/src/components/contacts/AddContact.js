import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };
  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card">
        <div className="card-header" />
        <div className="card-content">
          <form action="">
            <div className="field">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                className="input"
                placeholder="Enter name..."
                name="name"
                value={name}
                onChange={(e) => {
                  this.setState({name: e.target.value})
                }}
              />
            </div>
            <div className="field">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="text"
                className="input"
                placeholder="Enter email..."
                name="email"
                value={email}
                onChange={(e) => {
                  this.setState({email: e.target.value})
                }}
              />
            </div>
            <div className="field">
              <label htmlFor="phone" className="label">
                Phone
              </label>
              <input
                type="tel"
                className="input"
                placeholder="Enter phone..."
                name="phone"
                value={phone}
                onChange={(e) => {
                  this.setState({phone: e.target.value})
                }}
              />
            </div>
            <input
              type="submit"
              className="button is-primary"
              value="Add Contact"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
