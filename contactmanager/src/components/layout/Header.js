import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar is-dark" role="navigation">
      <div className="navbar-brand">
        <a className="navbar-item">{branding}</a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <a href="#" className="navbar-item">
            Home
          </a>
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
