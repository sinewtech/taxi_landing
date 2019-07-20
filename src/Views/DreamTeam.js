import React, { Component } from "react";
import { Container } from "reactstrap";
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
          <h1>DreamTeam</h1>
        </Section>
        <Section>
          <h1>CarlosV</h1>
        </Section>
        <Section>
          <h1>PilarR</h1>
        </Section>
        <Section>
          <h1>DavidM</h1>
        </Section>
        <Section>
          <h1>DanielS</h1>
        </Section>
        <Section>
          <h1>JosueR</h1>
        </Section>
      </Fullpage>
    );
  }
}

export default DreamTeam;
