import React, {Component} from 'react';
// import axios from'axios'
import utils from './utils'


class Main extends Component
{
  constructor()
  {
    super()
    this.state = { searchID : '', user : {}}
  }

  getID = (e) => {
    this.setState({searchID : e.target.value})
  }

  getData = async () => {
    let resp = await utils.getFullUserData(this.state.searchID)
    this.setState({user : resp})
    // console.log(resp)
    console.log(this.state.user)

  }

 
  render()
  { 
    let items = ''
    debugger
    if(Object.keys(this.state.user).length !== 0){
      items = this.state.user.todoTitles.map((item,index) => {
      return <li key={index}>{item}</li>})
      } 
    else {
      return items
      }

  return(
  <div>
    <h3>Parent Component</h3><br/>
    ID : <input type='text' onChange={this.getID} />
    <br/>
    <input type='button' value='Get Details' onClick={this.getData}/>
    <br/><br/>
    Name : {this.state.user.name}<br/>
    Email : {this.state.user.email}<br/>
    Todos : <br/>
    <ul>
      {items}
    </ul>

  </div>)
  }
}


export default Main;