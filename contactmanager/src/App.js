import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.min.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header branding="Contact Manager" />
        <Contact name="John Doe" email="jdoe@gmail.com" phone="123-456-7890" />
        <Contact
          name="Karen Smith"
          email="ksmith@gmail.com"
          phone="098-765-4321"
        />
      </div>
    );
  }
}

export default App;
