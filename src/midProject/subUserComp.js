import React,{useState,useEffect} from 'react'
import './css.css'


const SubUserComp = (props) => {
  // const [user, setUser] = useState([])
  // const [todoStatus, settodoStatus] = useState([])
  const [user, setUser] = useState(props.user)
  const [todoStatus, settodoStatus] = useState(props.todoStatus)
  const [isToggled, setToggled] = useState('hiddenStyle')
  const [todoCompleted, setTodoCompleted] = useState('')
  const [update, setUpdate] = useState({name:'',email:'',street:'',city:'',zipcode:''})

  // useEffect(() => {
  //   setUser(props.user)
  //   settodoStatus(props.todoStatus)
  // },[props.user.values, props.user.todoStatus])

  useEffect(() => {
    let hasFalse = todoStatus.find(x => x.completed == false)
    console.log(hasFalse)
    let status = hasFalse ? 'borderRed' : 'borderGreen'
    setTodoCompleted(status)
    console.log(status)
  },[todoStatus.length])

  const hoverDisplay = (display) =>{
    let displayClass = display == true ? 'visibleStyle' : 'hiddenStyle'
    setToggled(displayClass)
  }

  let item = todoStatus.length>0 ?
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
    </div> : settodoStatus(props.todoStatus)

  return(
    <div>
      {item}
    </div>
  )
  
}


export default SubUserComp;