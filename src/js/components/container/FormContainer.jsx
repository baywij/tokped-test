import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      nominal: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { nominal } = this.state;
    return (
      <form id="checkout-form">
        <Input
          text="Nominal in Rupiah"
          label="nominal"
          type="text"
          id="nominal"
          value={nominal}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("create-checkout-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;