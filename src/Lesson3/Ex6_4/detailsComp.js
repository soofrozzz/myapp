import React, {Component} from 'react';
import home_utils from './home_utils'
import './css.css'


class DetailsComp extends Component
{
  constructor(props)
  {
    super(props)
    this.state = { items : '' , user : {name : '', age : ''}}
  }

  componentDidUpdate(prevProps){
    console.log('?')
    if (this.props.x.detailsState != prevProps.x.detailsState){
      this.props.x.detailsState=='todos'?
        this.getTodos(this.props.x.id)
        :
        this.getPosts(this.props.x.id)
    }
  }

  getTodos = async (id) =>{
    let items = await home_utils.getTodos(id)
    this.setState({items})
  }

  getPosts = async (id) =>{
    let items = await home_utils.getPosts(id)
    this.setState({items})
  }

 
  render()
  { 
    let items = (this.state.items)?
      this.state.items.map((item,index) => {
    return <li key={index} className='detailsDiv'>
        {item}<br/>
      </li>}):''

  return(
  <div>
    <h3>Details Component  {' '} {this.props.x.detailsState}</h3>
    <ul>
      {items}
    </ul>
  </div>
  )}
}


export default DetailsComp;