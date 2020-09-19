import React, {Component} from 'react';
import axios from 'axios'



class Parent extends Component
{
  constructor()
  {
    super()
    this.state = { searchID : '', user : {}, todos : []}
  }

  getID = (e) => {
    this.setState({searchID : e.target.value})
  }

  getUser = async() => {
    let resp = await axios.get("https://jsonplaceholder.typicode.com/users/" + this.state.searchID)
     this.setState({user : resp.data})
    console.log(resp.data)
    if(this.state.user.name.startsWith('E')){
      // console.log('have e in')
      let respTodo = await axios.get("https://jsonplaceholder.typicode.com/todos")
      let allTodos = respTodo.data
      let userTodos = allTodos.filter(x => x.userId == this.state.searchID)
      // console.log(userTodos)
      let userTitles = userTodos.map(x => x.title)
      // console.log(userTitles)
      this.setState({todos : userTitles})
    } else{
      console.log('doesnt have e in')
      this.setState({todos : []})
    }
    
  }

  render()
  {
    let items = this.state.todos.map((item,index) => {
      return <li key={index}>{item}</li>
    })

  return(
  <div>
    <h3>Parent Component</h3><br/>
    ID : <input type='text' onChange={this.getID} />
    <br/>
    <input type='button' value='Get Details' onClick={this.getUser}/>
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

export default Parent;