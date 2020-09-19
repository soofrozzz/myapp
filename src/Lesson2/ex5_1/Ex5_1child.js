import React, {Component} from 'react';


class Child extends Component
{
  constructor()
  {
    super()
  }

  render(){

   return(
    <div>
      child
      <br/>
      {this.props.text}
    </div>                                           
    )
  }  
}

export default Child;