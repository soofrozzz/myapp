import React,{useState,useEffect} from 'react'
import home_utils from './home_utils'
import SubUserComp from './subUserComp'
import Loading from './Loading'
import './css.css'

const UserComp = (props) => {   
  
  const [users, setUsers] = useState([])
  const [todos, setTodos] = useState([])
  const [isLoading, setLoading] = useState(true)

const fetchData = async () =>{
  const todos = await home_utils.getTodosAll();
  setTodos(todos)
  setLoading(false)
}

useEffect(() => {
  setUsers(props.users)
  fetchData()
},[props.users])

   const items = users.map( (user,index) => {
    if(users){
      return <div key={index}>
        <SubUserComp todoStatus={todos.filter(x => x.userId === user.id)} user={user}/>
      </div>
    }
  })

  return(
    isLoading
    ? <div><Loading/></div>
    : <div> {items} </div>
  )
  }

export default UserComp;