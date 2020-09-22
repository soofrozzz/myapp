import React,{useState,useEffect} from 'react'
import './css.css'


const SubUserComp = (props) => {
  console.log(props.user)
  const [user, setUser] = useState([])
  const [todoStatus, settodoStatus] = useState([])
  const [isToggled, setToggled] = useState('')

  useEffect(() => {
    setUser(props.user)
    settodoStatus(props.todoStatus)
  },[props])

  console.log(user)

  const userTodoSttatus = () =>{
    let status;
    todoStatus.forEach((todo) => {
      if(user.id == todo.userId){
        status = todo.completed == true ? 'borderGreen' : 'borderRed'
      }
    })
    console.log(status)
    return status
  }

  const hoverDisplay = (display) =>{
    let displayClass = display == true ? 'visibleStyle' : 'hiddenStyle'
    setToggled(displayClass)
  }

  let item = 
    <div>
      <div className={userTodoSttatus(user)}>
        ID : {user.id}<br/>
        Name : {user.name}<br/>
        Email : {user.email}<br/>
        <button className='alignLeft' onMouseOver= {()=>{hoverDisplay(true)}}onMouseOut={()=>{hoverDisplay(false)}}>More</button>
        <button className='alignRight'>Update</button>
        <button className='alignRight'>Delete</button>
      </div>
        <div className= {isToggled}>
        Street : {user.address.street}<br/>
        City : {user.address.city}<br/>
        Zipcode : {user.address.zipcode}<br/>
      </div>
      <br/>
    </div>

  return(
    <div>
      {item}
    </div>
  )
  
}


export default SubUserComp;