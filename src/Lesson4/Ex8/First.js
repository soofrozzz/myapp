import React, {Component} from 'react';
import { useHistory } from "react-router-dom";
import './css.css'


const First = ({props}) => {
  let history = useHistory();

  const next = () =>{
    history.push("/second");
  }

  return(
  <div>
    <h3>First stage</h3>
    <button onClick={next}>Next..</button>
  </div>
  )
}
export default First;


// function HomeButton() {
//   let history = useHistory();

//   function handleClick() {
//     history.push("/home");
//   }

//   return (
//     <button type="button" onClick={handleClick}>
//       Go home
//     </button>
//   );
// }