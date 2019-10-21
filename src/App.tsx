import React from 'react';
import logo from './cats.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Image, Row} from "react-bootstrap";

const App: React.FC = () => {
  return (
      <div className="App">
          <Row className="panel">
              <Col xs={12} className="left-panel" />
              <Col xs={12} className="right-panel" />
          </Row>
          <Row>
              <Col xs={12}>
                  <Image
                      src={logo}
                      height={250}
                      width={250}
                      rounded />
                  <h3>Cat smash</h3>
              </Col>
          </Row>

          <Row className="justify-content-md-center cats-cards">
              <Col xs={6}>
                  <Image
                      src="http://24.media.tumblr.com/tumblr_m1nn0aPJU31qejbiro1_1280.jpg"
                      height={250}
                      width={250}
                      rounded />
              </Col>
              <Col xs={6}>
                  <Image
                      src="http://28.media.tumblr.com/tumblr_ly7rtpsCSc1qgop81o1_1280.jpg"
                      height={250}
                      width={250}
                      rounded />
              </Col>
          </Row>

          <Row>
              <Col xs={12} className="footer">
                  <Button variant="outline-info" size="lg">
                      <h4>Voir les plus beaux chats</h4>
                      <h6>12 000 votes</h6>
                  </Button>
              </Col>
          </Row>
    </div>
  );
};

export default App;
