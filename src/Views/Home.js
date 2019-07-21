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
          <div className="centerSection">
            <div className="logoContainer">
              <img alt="logo_arrivo" src="/logo_arrivo.png" />
              <h1 className="slogan">
                <Typist cursor={{ hideWhenDone: true, blink: true }}>
                  Revolucionando las centrales de Honduras
                  <Typist.Delay ms={750} />
                  <Typist.Backspace count={8} delay={250} /> Centroamérica{" "}
                  <Typist.Delay ms={1500} />
                  <Typist.Backspace count={19} delay={400} /> del mundo
                  <Typist.Delay ms={750} />.
                </Typist>
              </h1>
            </div>
          </div>
        </Section>
        <Section>
          <Container className="clienteContainer masterContainer" fluid>
            <Row>
              <Col sm={8}>
                <div className="centerText">
                  <Row style={{ padding: "10%", flexDirection: "column" }}>
                    <h1>Cliente</h1>
                    <p>
                      La aplicación del cliente se utiliza para pedir taxis y
                      comunicarse con el conductor.
                    </p>

                    <h2>Features</h2>
                    <ul>
                      <li>
                        Permite buscar lugares en el mapa y poner ubicaciones
                        manuales (texto o lugar en el mapa)
                      </li>
                      <li>Muestra de la carrera antes de confirmarla</li>
                      <li>
                        Estima el tiempo de llegada del conductor y al destino
                      </li>
                      <li>Mantiene un historial de carreras</li>
                    </ul>
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
          <Container className="conductorContainer masterContainer" fluid>
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
                  <Row style={{ padding: "10%", flexDirection: "column" }}>
                    <h1>Conductor</h1>
                    <p>
                      La aplicación del conductor se utiliza para responder a
                      carreras y movilizarse por la ciudad.
                    </p>
                    <h2>Features</h2>
                    <ul>
                      <li>
                        Muestra información del cliente y da opciones de
                        comunicación
                      </li>
                      <li>
                        Traza en el mapa las rutas de conductor a cliente y de
                        cliente a destino
                      </li>
                      <li>Navegación en tiempo real</li>
                      <li>
                        Genera reportes de ingresos, costos, ganancias, etc.
                      </li>
                    </ul>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section>
          <Container className="conductorContainer masterContainer" fluid>
            <Row>
              <Col sm={7}>
                <div className="centerText">
                  <Row style={{ padding: "10%", flexDirection: "column" }}>
                    <h1>Operador</h1>

                    <p>
                      La aplicación de Operador se usa para administrar la flota
                      de taxis.
                    </p>

                    <h2>Features</h2>
                    <ul>
                      <li>
                        Muestra la ubicación y el estado de toda la flota en
                        tiempo real
                      </li>
                      <li>
                        Notifica sobre todas las órdenes entrantes y activas
                      </li>
                      <li>
                        Determina qué unidad sería mejor enviar para cierta
                        orden
                      </li>
                      <li>
                        Calcula un precio sugerido para cada orden según el
                        tráfico, distancia y otros factores
                      </li>
                    </ul>
                  </Row>
                </div>
              </Col>
              <Col
                sm={5}
                style={{ textAlign: "center", display: "inline-block" }}
              >
                <img
                  style={{ width: "100%" }}
                  src="/computer_operator.png"
                  alt="AppConductor"
                />
              </Col>
            </Row>
          </Container>
        </Section>
      </Fullpage>
    );
  }
}

export default Home;
