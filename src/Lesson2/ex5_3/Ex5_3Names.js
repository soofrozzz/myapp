import React, {Component} from 'react';
import Ages from './Ex5_3Ages'
import MyContext from './contextAPI';
import './Ex5_3.css'


class Names extends Component
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
      <div className='bgYellow'>
        Names : <br/>
        <ul>
          {context.users.map((item,index) => 
            {
              return <li key={index}>{item.name}</li>
            }
          )}
        </ul>
        <Ages/>
      </div>)                                        
      }
    </MyContext.Consumer>)
  }  
}

export default Names;