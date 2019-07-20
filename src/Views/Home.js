import React, { Component } from "react";
import { Container } from "reactstrap";
import Fullpage from "../Components/Fullpage";
import Section from "../Components/Section";
class Home extends Component {
  render() {
    return (
      <Fullpage
        anchors={["spotlight", "cliente", "conductor", "operador", "master"]}
        sectionsColor={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
      >
        <Section>
          <Container className="masterContainer spotlightContainer" fluid>
            <div className="logoContainer">
              <img alt="logo_arrivo" src="/logo_arrivo.png" />
              <h1 className="slogan">¿QUIERE TAXI PAPU?</h1>
            </div>
          </Container>
        </Section>
        <Section>
          <div className="masterContainer clienteContainer">
            <p>cliente</p>
          </div>
        </Section>
      </Fullpage>
    );
  }
}

export default Home;
