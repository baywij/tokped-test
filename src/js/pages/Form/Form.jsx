import React, { Component } from "react"
import CardResult from "../../components/presentational/CardResult/CardResult.jsx"
import { notification } from 'antd'
import { Row, Col } from 'react-bootstrap' 

function hasWhiteSpace(value) {
  var indices = [];
  for(var i=0; i<value.length;i++) {
      if (value[i] === " ") indices.push(i);
  }
  if(/^[a-zA-Z]+$/.test(value[indices[0] - 1])){
    return false;
  }else if(/^[a-zA-Z]+$/.test(value[indices[0] + 1])){
    return true;
  }else{
    return true;
  }
}
function hasComma(value) {
  return value.indexOf(',') >= 0;
}

function lastRupiahs(value){
  var rupiah = value.slice(-2);
  if ( /^[a-zA-Z]+$/.test(rupiah) && value.length > 2 && value.slice(-3) === " "){
    return true
  }else{
    return false
  }
}

function CheckMissingValue(value){
  var rupiah = value.slice(-2);
  if ( /^[a-zA-Z]+$/.test(rupiah) && value.length === 2 ){
    return true
  }else{
    return false
  }
}

class Form extends Component {
  constructor() {
    super();
    this.state = {
      nominal: "" , 
      defaultNominal : [ 100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50 ],
      cardResultValue : null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  componentDidMount(){
    const {defaultNominal} = this.state;
    console.log("defaultNominal" , defaultNominal)
  }

  handleChange(event) {
    if(  event.target.value === "") this.setState({ cardResultValue : null })
    this.setState({ [event.target.id]: event.target.value });
  }
 
  handleEnter(e){
    const value = e.target.value
    if(e.keyCode == 13){ 
      if(hasWhiteSpace(value)){
          notification.open({
            message: 'Error',
            description: 'Invalid Separator',
            onClick: () => {
              console.log('Notification Clicked!');
            },
          });
          return;
      }
      if(hasComma(value)){
          notification.open({
            message: 'Error',
            description: 'Invalid Separator',
            onClick: () => {
              console.log('Notification Clicked!');
            },
          });
          return;
      }
      if(lastRupiahs(value)){
          notification.open({
            message: 'Error',
            description: 'Invalid Separator',
            onClick: () => {
              console.log('Notification Clicked!');
            },
          });
          return;
      }
      if(CheckMissingValue(value)){
          notification.open({
            message: 'Error',
            description: 'Missing Value',
            onClick: () => {
              console.log('Notification Clicked!');
            },
          });

          return;
      }

      var fixValue = parseInt(value.replace(/,.*|[^0-9]/g, ''), 10);
      const { defaultNominal } = this.state;
      var resultArray = []
      var flag = 0
      var sumTotal = 0
    
      for( var i = 0; i <= defaultNominal.length ; i++ ){
        
        if( fixValue >= defaultNominal[i - flag] ) {
          resultArray.push( defaultNominal[i - flag] )
          fixValue = fixValue - defaultNominal[i]
          if( fixValue >= defaultNominal[i] ){
            flag++;
          }else{
            flag = 0;
          }

          sumTotal = sumTotal + defaultNominal[i];
          
        }

      }

      console.log("resultArray" , resultArray)

      var setCount = {};
      resultArray.forEach(function(i) { setCount[i] = (setCount[i]||0) + 1;});
    
      var fixReturn = "";
      for (var key in setCount) {
        if (setCount.hasOwnProperty(key)) {
            console.log(key + " -> " + setCount[key]);
            fixReturn += setCount[key] + "x Rp" + key + " "
        }
    }

      this.setState({ cardResultValue : fixReturn })
    }
  }

  render() {

    const { nominal , cardResultValue } = this.state;
    return (
    <Row>
      <Col md={6}>
        <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="nominal"
                  value={nominal}
                  onChange={this.handleChange}
                  required
                  placeholder="Number of rupiahs"
                  onKeyDown={this.handleEnter}
                />
      </div>
      </Col>
      <Col md={6}>
        <CardResult cardResultValue={cardResultValue} />
      </Col>
    </Row>
      
    );
  }
}
export default Form;
