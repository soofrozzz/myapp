import React, {Component} from 'react';

class SwicharuComp extends Component{
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
    if (newName.length > 4){
      console.log(newName)
      this.setState({name : newName})
      this.switch()
    }
  }
  getAge = (e) =>{
    let newAge = e.target.value;
    this.setState({age : newAge})
    if (newAge.length > 4){
      console.log(newAge)
      this.setState({age : newAge})
      this.switch()
    }
  }
  switch = () =>{
    const a = this.state.name;
    const b = this.state.age;
    this.setState({name : b});
    this.setState({age : a})    
  }

  render(){
    return (
      <div>
        <h1>Swicharu!</h1>

        Age : <input type='text' value={this.state.name} onChange={this.getName}/><br/>
        Name : <input type='text'  value={this.state.age} onChange={this.getAge}/><br/>
        Switch : <input type='button' value='Swap' onClick={this.switch} /> 


      </div>
    );
  }
}

export default SwicharuComp;
