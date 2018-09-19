import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (err) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card">
              <div className="card-header">
                <h4 className="card-header-title">
                  {name}{" "}
                  <i onClick={this.onShowClick} className="fas fa-sort-down" />
                </h4>
                <Link to={`contact/edit/${id}`}>
                  <i className="fas fa-pencil-alt" />
                </Link>
                <i
                  className="fas fa-times"
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </div>
              {showContactInfo ? (
                <div className="card-content">
                  <p className="panel-block">Email: {email}</p>
                  <p className="panel-block">Phone: {phone}</p>
                </div>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
