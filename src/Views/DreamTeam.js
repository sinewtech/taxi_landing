import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Fullpage from "../Components/Fullpage";
import Section from "../Components/Section";
class DreamTeam extends Component {
  render() {
    return (
      <Fullpage
        anchors={[
          "DreamTeam",
          "CarlosV",
          "PilarR",
          "DavidM",
          "DanielS",
          "JosueR"
        ]}
        sectionsColor={[
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff"
        ]}
      >
        <Section>
          <Container fluid>
            <div style={{ position: "absolute", top: 0, padding: 5 }}>
              <h1>DreamTeam</h1>
            </div>
            <Container>
              <Row>
                <Col style={{ backgroundColor: "red" }}>1</Col>
                <Col style={{ backgroundColor: "blue" }}>2</Col>
                <Col style={{ backgroundColor: "green" }}>3</Col>
                <Col style={{ backgroundColor: "yellow" }}>4</Col>
                <Col style={{ backgroundColor: "salmon" }}>5</Col>
              </Row>
            </Container>
          </Container>
        </Section>
      </Fullpage>
    );
  }
}

export default DreamTeam;
