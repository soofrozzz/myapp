import React, {Component} from 'react';

class PropsComp extends Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <h1>from propsComp</h1>
        {/* Name : {this.props.name} <br/>
        Age : {this.props.age} <br/>
        Address : {this.props.address} */}
      </div>
    );
  }
}

export default PropsComp;
