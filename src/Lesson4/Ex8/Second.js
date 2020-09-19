import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import './css.css'



const Second = (props) => {
  let history = useHistory();

  const [name, setName] = useState({first: '', last : ''}) 

  const updateState = (e) => {
    setName({...name, [e.target.name]: e.target.value})
  }

  const next = () =>{
    localStorage.setItem('data', JSON.stringify(name));
    history.push("/third");
  }
    
  return(
  <div>
    <h3>Second stage</h3>
    First Name : <input value={name.first} name='first' onChange={updateState}></input><br/>
    Last Name : <input value={name.last} name='last' onChange={updateState}></input><br/>
    <button onClick={next}>Next..</button>
  </div>)
}


export default Second;