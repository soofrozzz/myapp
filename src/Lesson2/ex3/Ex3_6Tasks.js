import React, {Component} from 'react';
import './Lesson3.css'

class Tasks extends Component
{
  constructor()
  {
    super()
  }

 render(){

  return(
    <div className='borderBlue'>
      Title : {this.props.tasks.title}<br/>
      Status : {this.props.tasks.completed ? 'completed' : 'in progress'}
    </div>)  
}
}

export default Tasks;