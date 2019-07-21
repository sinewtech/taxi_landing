import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Typist from "react-typist";
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
          <Container className="masterContainer" fluid>
            <div className="logoContainer">
              <img alt="logo_arrivo" src="/logo_arrivo.png" />
              <h1 className="slogan">
                <Typist>
                  Revolucionando los taxis de Honduras
                  <Typist.Delay ms={750} />
                  <Typist.Backspace count={8} delay={1000} /> Centroamérica{" "}
                  <Typist.Delay ms={1500} />
                  <Typist.Backspace count={19} delay={2000} /> del mundo
                </Typist>
              </h1>
            </div>
          </Container>
        </Section>
        <Section>
          <Container
            style={{ backgroundColor: "white" }}
            className="clienteContainer masterContainer"
            fluid
          >
            <Row>
              <Col sm={8}>
                <div className="centerText">
                  <Row style={{ padding: "10%" }}>
                    <h1>Cliente</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas maximus ipsum nec metus elementum congue. Cras
                      vel dolor feugiat, suscipit dui quis, interdum sem. Mauris
                      at fermentum sapien. Aliquam id ultricies ligula, sed
                      mattis ante. Quisque posuere mollis mollis. Aenean elit
                      augue, pulvinar quis posuere eu, ullamcorper sit amet
                      nulla.
                    </p>
                  </Row>
                </div>
              </Col>
              <Col
                sm={4}
                style={{ textAlign: "center", display: "inline-block" }}
              >
                <img
                  style={{ width: "15vw" }}
                  src="/phone_client.png"
                  alt="AppConductor"
                />
              </Col>
            </Row>
          </Container>
        </Section>
        <Section>
          <Container
            className="conductorContainer masterContainer"
            fluid
            style={{ backgroundColor: "white" }}
          >
            <Row>
              <Col
                sm={4}
                style={{ textAlign: "center", display: "inline-block" }}
              >
                <img
                  style={{ width: "15vw" }}
                  src="/phone_driver.png"
                  alt="AppConductor"
                />
              </Col>
              <Col sm={8}>
                <div className="centerText">
                  <Row style={{ padding: "10%" }}>
                    <h1>Conductor</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas maximus ipsum nec metus elementum congue. Cras
                      vel dolor feugiat, suscipit dui quis, interdum sem. Mauris
                      at fermentum sapien. Aliquam id ultricies ligula, sed
                      mattis ante. Quisque posuere mollis mollis. Aenean elit
                      augue, pulvinar quis posuere eu, ullamcorper sit amet
                      nulla.
                    </p>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section>
          <h1>Operador</h1>
          <img
            style={{ width: "75vw" }}
            src="/computer_operator.png"
            alt="AppConductor"
          />
        </Section>
      </Fullpage>
    );
  }
}

export default Home;
