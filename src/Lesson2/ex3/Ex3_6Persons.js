import React, {Component} from 'react';
import Person from './Ex3_6Person';
import Tasks from './Ex3_6Tasks';
import './Lesson3.css'


class Persons extends Component
{
  constructor()
  {
    super()
    this.state = 
    { 
      persons :
      [
        { name :'Avi', tasks: 
          [
          {title: 'task A', completed: true},
          {title: 'task B', completed: false}
          ]
        }, 
        { name :'Dana', tasks: 
          [
            {title: 'task C', completed: false},
            {title: 'task D', completed: true}
          ]
        }
      ]
    }
  }

 render(){
  let items = this.state.persons.map((item,index) =>
  {
    //works
    return <Person name={item.name} tasks={item.tasks} key={index} />
    //doesnt work
    // return <Person name={item} tasks={item.tasks} key={index} />
  })
  return(
    <div className='borderGreen'>
      Persons list - Parent<br/><br/>
      {items}
    </div>)  
  }
}

export default Persons;