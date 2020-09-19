import React, {Component} from 'react';
import './css.css'
import UserComp from './userComp';
import DetailsComp from './detailsComp';



class Home extends Component
{
  constructor()
  {
    super()
    this.state = { detailsState : '', id : ''}
  }

  setDetails = (detailsState,id) => {
    this.setState({detailsState, id})
  }
 
  render()
  { 
    
  return(
  <div>
    <h3>Parent Component</h3><br/>
    <div className='leftDiv'>
      <UserComp setDetails={this.setDetails}/>
    </div>

    <div className='rightDiv'>
      <DetailsComp x={this.state}/>
    </div>
  </div>)
  }
}


export default Home;