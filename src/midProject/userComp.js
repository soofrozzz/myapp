import React,{useState,useEffect} from 'react'
import home_utils from './home_utils'
import './css.css'
import SubUserComp from './subUserComp'
import Loading from './Loading'

const UserComp = (props) => {   
  
  const [users, setUsers] = useState([])
  const [todos, setTodos] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [todoStatus, settodoStatus] = useState([])

  useEffect(() => {
      setUsers(props.users)
  },[props.users])

  useEffect(() => {
    async function fetchData(){
      let allTodos = await home_utils.getTodosAll()
      setTodos(allTodos)
      setLoading(false)
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
        <SubUserComp todoStatus={todoStatus.filter(x => x.userId === user.id)} user={user}/>
      </div>
    }
    console.log(user, index)
  })

  return(
    isLoading
    ? <div><Loading/></div>
    : <div> {items} </div>
  )
  
}


export default UserComp;