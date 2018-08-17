import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };
  render() {
    const { name, email, phone } = this.props;
    const { showContactInfo } = this.state;
    return (
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">
            {name} <i onClick={this.onShowClick} className="fas fa-sort-down" />
          </h4>
          <i className="fas fa-times" onClick={this.onDeleteClick} />
        </div>
        {showContactInfo ? (
          <div className="card-content">
            <p className="panel-block">Email: {email}</p>
            <p className="panel-block">Phone: {phone}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
