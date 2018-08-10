import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card">
        <h4 className="card-header-title">{name}</h4>
        <div className="card-content">
          <p className="panel-block">Email: {email}</p>
          <p className="panel-block">Phone: {phone}</p>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
