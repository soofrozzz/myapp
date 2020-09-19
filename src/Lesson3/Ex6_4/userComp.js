import React, {Component} from 'react';
import home_utils from './home_utils'
import './css.css'


class UserComp extends Component
{
  constructor()
  {
    super()
    this.state = { users : '' }
  }

  getData = async () =>{
    let users = await home_utils.getUsers()
    this.setState({users})
  }

  componentDidMount(){
    this.getData();
  }

  getTodos = (id) =>{
    this.props.setDetails('todos', id)

  }

  getPosts = (id) =>{
    this.props.setDetails('posts', id)
  }
  componentDidUpdate(){
    
      console.log('userComp')
}
  
 
  render()
  { 
    let users = (this.state.users)?
    this.state.users.map((item,index) => {
    return <div key={index} className='userDiv'>
        {item.name}<br/>
        <button onClick={()=>{this.getTodos(item.id)}}>Todos</button>
        <button onClick={()=>{this.getPosts(item.id)}}>Posts</button>
      </div>}):''

  return(
  <div>
    {this.props.name}
    <h3>User Component</h3>
    <ul>
      {users}
    </ul>
  </div>
  )}
}


export default UserComp;