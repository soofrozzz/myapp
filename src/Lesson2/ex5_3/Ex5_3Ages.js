import React, {Component} from 'react';
import MyContext from './contextAPI';
import './Ex5_3.css'


class Ages extends Component
{
  constructor()
  {
    super()
  }

  render(){

    return(
      <MyContext.Consumer>
      {
        context => (
      <div className='bgOrange'>
        Names : <br/>
        <ul>
          {context.users.map((item,index) => 
            {
              return <li key={index}>{item.age}</li>
            }
          )}
        </ul>
      </div>)                                        
      }
    </MyContext.Consumer>)
  }  
}

export default Ages;