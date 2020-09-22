import React,{useState,useEffect} from 'react'
import home_utils from './home_utils'
import './css.css'
import SubUserComp from './subUserComp'

const UserComp = (props) => {   
  
  const [users, setUsers] = useState([])
  const [todos, setTodos] = useState([])
  const [todoStatus, settodoStatus] = useState([])

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

  let items = users.map((user,index) => {
    if(users!==undefined || users.length!==0){
      return <div key={index}>
        <SubUserComp todos={todos} todoStatus={todoStatus} user={user}/>
      </div>
    }
    console.log(users, user, index)
  })

  return(
    <div>
      {items}
    </div>
  )
  
}


export default UserComp;