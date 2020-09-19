import React, {Component} from 'react';
import Names from './Ex5_3Names'
import './Ex5_3.css'
import MyContext from './contextAPI';


class Parent extends Component
{
  constructor()
  {
    super()
    this.state = {name : '', age : '', users : []}
  }

  getName = (e) => {
    this.setState({name : e.target.value})
  }

  getAge = (e) => {
    this.setState({age : e.target.value})
  }

  add = () => {
    let obj = {name : this.state.name, age : this.state.age}
    this.setState({users : [...this.state.users, obj]})
    console.log(this.state.users)
  }

  render(){

    return(
      <MyContext.Provider value={{users : this.state.users}} >
        <div className='bgRed'>
          Name : <input type='text' onChange={this.getName}/><br/>
          Age : <input type='text' onChange={this.getAge}/><br/>
          <input type='button' onClick={this.add} value='Add'/><br/>
          <Names/>
        </div>
      </MyContext.Provider>)
  }  
}

export default Parent;