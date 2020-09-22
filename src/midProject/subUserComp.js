import React,{useState,useEffect} from 'react'
import './css.css'


const SubUserComp = (props) => {

  const [user, setUser] = useState(props.user)
  const [todoStatus, settodoStatus] = useState(props.todoStatus)
  const [isToggled, setToggled] = useState('hiddenStyle')
  const [todoCompleted, setTodoCompleted] = useState('')
  const [update, setUpdate] = useState({name:'',email:'',street:'',city:'',zipcode:''})


  const findUncompleted = (list) => {
    const isCompleted = list.find(item => item.completed === false);
    return isCompleted.completed
  }

  useEffect(() => {
    const hasFalse = findUncompleted(todoStatus)
    setTodoCompleted(hasFalse ? 'borderRed' : 'borderGreen')
  },[todoStatus.length])

  const hoverDisplay = (display) =>{
    const displayClass = display? 'visibleStyle' : 'hiddenStyle';
    setToggled(displayClass)
  }

  const item = todoStatus.length > 0 ?
    <div>
      <div className={todoCompleted}>
        ID : {user.id}<br/>
        Name : <input type='text' value={user.name} onChange={(e)=>{setUpdate({...update, name : e.target.value})}} /><br/>
        Email : <input type='text' value={user.email}/><br/>
        <button className='alignLeft' onMouseOver= {()=>{hoverDisplay(true)}}onClick={()=>{hoverDisplay(false)}}>More</button>
        <button className='alignRight'>Update</button>
        <button className='alignRight'>Delete</button>
        <br/>
        <div className= {isToggled}>
          Street : <input type='text' value={user.address.street}/><br/>
          City : <input type='text' value={user.address.city}/><br/>
          Zipcode : <input type='text' value={user.address.zipcode}/><br/>
        </div>
      </div>
      <br/>
    </div> : ''

  return(
    <div>
      {item}
    </div>
  )
  
}

export default SubUserComp;