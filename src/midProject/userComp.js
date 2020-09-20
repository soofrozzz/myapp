import React,{useState,useEffect} from 'react'
import home_utils from './home_utils'
import './css.css'


const UserComp = (props) => {   
  
  const [users, setUsers] = useState([])
  const [todos, setTodos] = useState([])
  const [todoStatus, settodoStatus] = useState([])
  const [isToggled, setToggled] = useState('hiddenStyle');

  useEffect(() => {
      setUsers(props.users)
   },[props.users])

  useEffect(() => {
    async function fetchData(){
      let allTodos = await home_utils.getTodosAll()
      setTodos(allTodos)
    }
    fetchData();
   },[])

  useEffect(() => {
    let userIdandStatus = todos.map(item =>{
    let obj={userId : item.userId, completed : item.completed}
    return obj
    })
   settodoStatus(userIdandStatus)
  },[todos])

  const userTodoSttatus = (user) =>{
    let status;
    todoStatus.forEach((todo) => {
      if(user.id === todo.userId){
        status = todo.completed == true ? 'borderGreen' : 'borderRed'
      }
    })
    console.log(status)
    return status
  }

  const hoverDisplay = (display) =>{
    let current = display == true ? 'visibleStyle' : 'hiddenStyle'
    setToggled(current)
    console.log(isToggled)
  }

  let items = users.map((item,index) => {
    return <div key={index}>
      <div className={userTodoSttatus(item)}>
        ID : {item.id}<br/>
        Name : {item.name}<br/>
        Email : {item.email}<br/>
        <button className='alignLeft' onMouseOver={()=>{hoverDisplay(true)}} onMouseOut={()=>{hoverDisplay(false)}}>More</button>
        <button className='alignRight'>Update</button>
        <button className='alignRight'>Delete</button>
      </div>
        <div className={isToggled}>
        Street : {item.address.street}<br/>
        City : {item.address.city}<br/>
        Zipcode : {item.address.zipcode}<br/>
      </div>
      <br/>
    </div>
  })


  return(
    <div>
      {items}
    </div>
  )
  
}


export default UserComp;