import React, {Component} from 'react';
import './Demo1_ChildComp.css'

class ChildComp extends Component{
  constructor(){
    super()
  }

  sayHello = () => {
    alert('Hello')
  }

  render(){
    return (
      <div className="redText">
        <h1>from childComp in Demos</h1>
         {/* <br /> */}
        {/* <input type='button' value='say hello' className='redText' onClick={this.sayHello} /> */}
      </div>
    );
  }
}

export default ChildComp;
