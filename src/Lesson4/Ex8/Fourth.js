import React, {useState, useEffect} from 'react';
import './css.css'



const Fourth = (props) => {

  const [data, setData] = useState('') 

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('data'))
    setData(data)
  },[]);


    
    
  return(
  <div>
    <h3>Fourth stage</h3><br/>
    This is the info you entered: {data.first} {data.last} {data.city} 
  </div>)
}


export default Fourth;