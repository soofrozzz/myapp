import React, {Component} from 'react';
import Child from './Ex5_1child'


class Parent extends Component
{
  constructor()
  {
    super()
    this.state = { data : ''}
  }

  getText = (e) =>{
    console.log('got here')
    this.setState({data : e.target.value})
  }

  render()
  {
    return(
    <div>
      parent<br/><br/>
      <input type='text' onChange={this.getText}/>
      <br/><br/>
      <Child text={this.state.data} />
  </div>
  )
  }
}

export default Parent;