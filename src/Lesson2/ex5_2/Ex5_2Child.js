import React, {Component} from 'react';
import './Ex5_2.css'


class Child2 extends Component
{
  constructor()
  {
    super()
    this.state = {
      name : '',
      age : '',
      city : '',
      isAdult : false
    }
  }

  getName = (e) => {
    this.setState({name : e.target.value})
  }

  getAge = (e) => {
    this.setState({age : e.target.value})
  }

  getCity = (e) => {
    this.setState({city : e.target.value})
  }

  getIsAdult = (e) => {
    this.setState({isAdult : e.target.checked})
  }

  addPerson = () => {
    let obj = {
      name :this.state.name,
      age :this.state.age,
      city :this.state.city,
      adult :this.state.isAdult
    }
    this.props.callback(obj)
    console.log(obj)
  }

  render(){

   return(
    <div className='bgGrey'>
      <h4>Child2 Component</h4>
      Name : <input type='text' onChange={this.getName}/><br/>
      Age : <input type='text' onChange={this.getAge}/><br/>
      City : <select onChange={this.getCity}>
        <option>Haifa</option>
        <option>TLV</option>
        <option>Ashkelon</option>
        <option>Eilat</option>
      </select><br/>
      Is Adult : 
      <input type='checkbox' onChange={this.getIsAdult}/><br/>
      Name : <input type='button' onClick={this.addPerson} value='Add'/><br/>

    </div>                                           
    )
  }  
}

export default Child2;