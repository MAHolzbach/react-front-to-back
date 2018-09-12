import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar is-dark" role="navigation">
      <div className="navbar-brand">
        <a className="navbar-item">{branding}</a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/" className="navbar-item">
            <i className="fas fa-home" /> Home
          </Link>
          <Link to="/contact/add" className="navbar-item">
            <i className="fas fa-plus" />
            Add
          </Link>
          <Link to="/about" className="navbar-item">
            <i className="fas fa-question" />
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
