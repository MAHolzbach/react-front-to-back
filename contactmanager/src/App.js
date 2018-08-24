import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.min.css";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
