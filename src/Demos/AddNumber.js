import React, {Component} from 'react';

class AddNumberComp extends Component{
  constructor(){
    super()
    this.state = {
      num1:'',
      num2:''
    }
  }

  getNum1 = (e) =>{
    let newNum1 = e.target.value;
    this.setState({num1 : newNum1})
  }
  getNum2 = (e) =>{
    let newNum2 = e.target.value;
    this.setState({num2 : newNum2})
  }
  addNum = () =>{
    let num1val = parseInt(this.state.num1);
    let num2val = parseInt(this.state.num2);
    let sum = num1val + num2val;
    this.setState({num2 : sum})
  }

  render(){
    return (
      <div>
        <h1>from AddNumber</h1>

        Add this : <input type='text' value={this.state.num1} onChange={this.getNum1}/><br/>
        To this : <input type='text'  value={this.state.num2} onChange={this.getNum2}/><br/>
        <input type='button' value='Do it' onClick={this.addNum} /> 


      </div>
    );
  }
}

export default AddNumberComp;
