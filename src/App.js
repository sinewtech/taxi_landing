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
          <Header />
          <div className="content">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/equipo" component={DreamTeam} exact />
              {/* <Route component={Error404} /> */}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
