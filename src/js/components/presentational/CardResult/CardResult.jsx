import React, { Component } from "react"
import {Jumbotron } from 'react-bootstrap' 

class CardResult extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Jumbotron>
            <p>{this.props.cardResultValue}</p>
      </Jumbotron>
    );
  }
}
export default CardResult;
