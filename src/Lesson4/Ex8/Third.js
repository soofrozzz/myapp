import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import './css.css'



const Third = (props) => {
  let history = useHistory();

  const [city, setCity] = useState('') 

  const next = () =>{
    let data = JSON.parse(localStorage.getItem('data'))
    data.city = city
    localStorage.setItem('data', JSON.stringify(data))
    history.push("/fourth")
  }
    
  return(
  <div>
    <h3>Third stage</h3><br/>
    <select onChange={(e)=>setCity(e.target.value)}>
    <option disabled selected value> -- select -- </option>
      <option value="haifa">Haifa</option>
      <option value="tlv">TLV</option>
      <option value="jerus">Jerus</option>
      <option value="eilat">Eilat</option>
    </select><br/>
    <button onClick={next}>Next..</button>
  </div>)
}


export default Third;