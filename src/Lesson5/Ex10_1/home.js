import React, {useState} from 'react';


const Home = (props) => {
 
  const [users, setUsers] = useState(
    [
      {name : 'Dana', age:20, city: 'Haifa'},
      {name : 'ron', age:22, city: 'tlv'},
      {name : 'vered', age:31, city: 'ashdod'},
      {name : 'dov', age:19, city: 'eilat'}
    ])

    const [newName, setNewName] =useState('') 
    const [newAge, setNewAge] =useState('') 
    const [newCity, setNewCity] =useState('') 


  const addUser = () =>{
    let allUsers = [...users]
    let newUser = {name : newName, age:newAge, city: newCity}
    allUsers.push(newUser)
    setUsers(allUsers)
    console.log(allUsers)
  }

  let table = users.map((item,index) =>{
    return <tr key={index}>
      <th>{item.name}</th>
      <th>{item.age}</th>
      <th>{item.city}</th>
    </tr>
  })


  return(
    <div>
      <table border='solid'>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>city</th>
          </tr> 
        </thead>
        <tbody>
          {table}
        </tbody>
      </table>
        <br/>
          Name : <input type='text' onChange={e=>setNewName(e.target.value)}/><br/>
          Age : <input type='text' onChange={e=>setNewAge(e.target.value)}/><br/>
          City : <input type='text' onChange={e=>setNewCity(e.target.value)}/><br/>
          <button onClick={()=> addUser()}>add user</button>
      </div>
  )
  
}


export default Home;