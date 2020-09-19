import React, {Component} from 'react';

class PersonsComp extends Component{
  constructor(){
    super()
    this.state = {
      name:'',
      age:''
    }
  }

  getName = (e) =>{
    let newName = e.target.value;
    this.setState({name : newName})
  }
  getAge = (e) =>{
    let newAge = e.target.value;
    this.setState({age : newAge})
  }
  swap = () =>{
    const a = this.state.name;
    const b = this.state.age;
    this.setState({name : b});

    this.setState({age : a})    
  }

  render(){
    return (
      <div>
        <h1>from Persons</h1>

        <input type='text' value={this.state.name} onChange={this.getName}/><br/>
        <input type='text'  value={this.state.age} onChange={this.getAge}/><br/>
        <input type='button' value='Swap' onClick={this.swap} /> 


      </div>
    );
  }
}

export default PersonsComp;
