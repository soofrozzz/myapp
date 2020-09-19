import React, {Component} from 'react';
import Tasks from './Ex3_6Tasks'
import './Lesson3.css'

class Person extends Component
{
  constructor()
  {
    super()
  }

 render(){
  let items = this.props.tasks.map((item,index) =>
  {
    return <Tasks tasks={item} key={index} />
  })
  return(
    <div className='borderRed'>
      Name : {this.props.name}<br/><br/>
      Tasks:<br/><br/>
      {items}
    </div>)  
}
}

export default Person;