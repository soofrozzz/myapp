import React, {Component} from 'react';
import Child2 from './Ex5_2Child'
import './Ex5_2.css'



class Parent2 extends Component
{
  constructor()
  {
    super()
    this.state = { users : []}
  }

  getNewData = (obj) => {
    this.setState({users : [...this.state.users, obj]})
    console.log(this.state.users)
  }

  render()
  {
    let items = this.state.users.map((item,index) => 
    {return <li key={index}>My name is {item.name} , I'm {item.age} years old , I'm originaly from {item.city} and I'm {item.adult ? ' an adult' : ' not an adult'}</li>
    })
  
    return(
    <div className='bgYellow'>
      <h3>Parent2 Component</h3>
      <ul>
        {items}
      </ul>
      <Child2 callback={data => this.getNewData(data)}/>
  </div>)
  }
}

export default Parent2;