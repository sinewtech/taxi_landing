import React, { Component } from "react";
import "./Styles/App.css";
import Fullpage from "./Components/Fullpage";
import Section from "./Components/Section";
class App extends Component {
  render() {
    return (
      <Fullpage
        anchors={["spotlight", "cliente", "conductor", "operador", "master"]}
        sectionsColor={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
      >
        <Section>
          <div className="masterContainer spotlightContainer">
            <p>spotlight</p>
          </div>
        </Section>
        <Section>
          <div className="masterContainer clienteContainer">
            <p>cliente</p>
          </div>
        </Section>
        <Section>
          <div className="masterContainer conductorContainer">
            <p>conductor</p>
          </div>
        </Section>
        <Section>
          <div className="masterContainer operadorContainer">
            <p>operador</p>
          </div>
        </Section>
        <Section>
          <div className="masterContainer masterContainer">
            <p>master</p>
          </div>
        </Section>
      </Fullpage>
    );
  }
}

export default App;
