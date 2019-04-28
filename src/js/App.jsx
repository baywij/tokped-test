import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "./pages/Form/Form.jsx";

import { Divider } from 'antd';

import { Container, Row, Col, Image } from 'react-bootstrap' 

import './global.scss';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Container>
        <Row className="app-style">
        <Col sm={12} style={{textAlign : "center"}}>
              <Image src="./assets/images/tokopedia.png" fluid />
        </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Divider > Software Engineer Mobile Web Test </Divider>
            <Form />
            <Divider orientation="left"> <p>Press <b>Enter</b> for run this Awesome Apps :))</p> </Divider>
            
          </Col>
        </Row>
      </Container>
        
    );
  }
}
export default App;
const root = document.getElementById("root");

root ? ReactDOM.render(<App />, root) : false;