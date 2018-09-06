import React, { Component } from "react";
import { Consumer } from "../../context";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
  };
  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card">
              <div className="card-header" />
              <div className="card-content">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
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
                      onChange={this.onChange}
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
                      onChange={this.onChange}
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
                      onChange={this.onChange}
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
        }}
      </Consumer>
    );
  }
}

export default AddContact;
