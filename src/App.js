import React, { Component } from "react";
import "./Styles/App.css";
import Header from "./Components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import DreamTeam from "./Views/DreamTeam";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header location={this.props.location} />
          <div className="content">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/equipo" component={DreamTeam} exact />
              {/* <Route component={Error404} /> */}
            </Switch>
          </div>
          <a
            href="https://sinewave.tech"
            rel="noopener noreferrer"
            target="_blank"
            className="creds"
          >
            <img src={"/SineCreds.png"} />
          </a>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
