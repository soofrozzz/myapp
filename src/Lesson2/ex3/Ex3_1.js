import React, {Component} from 'react';
import './Lesson3.css'

class DynamicRenderComp extends Component
{
  constructor()
  {
    super()
    this.state = { underFive : false, isVisible : true, isExist : true,
                    colors : ["Red","Green","Yello"] }
  }

  checkfivechars = () => {
    if(this.value.length<5){
      this.setState({underFive : !this.state.underFive})
    }
  }
//  changeColor = () =>
//  {
//     this.setState({isRed : !this.state.isRed})
//  }

 render(){
  let bgColor;
    if(this.state.underFive)
    {
      bgColor = "bgRed"
    }
    else
    {
      bgColor = "bgBlue"
    }



  return(
    <div>
      <input type='text' value='' className={bgColor} onChange ={this.checkfivechars}/>
    </div>)
  
}
}

export default DynamicRenderComp;