import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";
import { Button, notification } from 'antd';


const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
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
          type="text"
          id="nominal"
          value={nominal}
          handleChange={this.handleChange}
          placeholder="Nominal"
        />
        <Button type="primary" onClick={openNotification}>Open the notification box</Button>
      </form>
    );
  }
}
export default FormContainer;

// const wrapper = document.getElementById("create-checkout-form");
// wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;