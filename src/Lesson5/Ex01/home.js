import React,{useState,useEffect} from 'react'
import axios from 'axios'



const Home = (props) => {

  const [id, setID] = useState(0) 
  const [user, setUser] = useState('')

  useEffect(() =>
   {
      let resp = ''
       axios.get('https://jsonplaceholder.typicode.com/users/'+id)
       .then(resp => setUser(resp.data))
   },[id])

  return(
    <div>
        ID : <input onChange={e=>setID(e.target.value)}/><br/>
        {/* <button onClick={()=> setID()}>add user</button><br/> */}
        {user.name}
    </div>
  )
  
}


export default Home;