import React,{useState,useEffect} from 'react'
import home_utils from './home_utils'
import UserComp from './userComp'

const HomePage = (props) => {

  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchData(){
      let users = await home_utils.getUsers()
      if(search){
        users = home_utils.search(users,search)
      }
      setUsers(users)
    }
    fetchData();
   },[search])

  return(
    <div>
      <br/>
      <div>
        Search : <input type='text' onChange={(e)=>{setSearch(e.target.value)}}/> 
      </div><br/>
      <UserComp users={users} />
    </div>
  )
  
}


export default HomePage;