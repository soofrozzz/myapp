import React,{useState,useEffect} from 'react'
import home_utils from './home_utils'
import './css.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const UserComp = (props) => {   
  
  const [users, setUsers] = useState([])
  const [todos, setTodos] = useState([])
  const [todoStatus, settodoStatus] = useState([])

  const classes = useStyles();



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

  const userTodoSttatus = (user) =>{
    let status;
    todoStatus.forEach((todo) => {
      if(user.id === todo.userId){
        status = todo.completed == true ? 'borderGreen' : 'borderRed'
      }
    })
    return status
  }
  let items = users.map((item,index) => {
    return <div key={index}>
      <div className={userTodoSttatus(item)}>
        ID : {item.id}<br/>
        Name : {item.name}<br/>
        Email : {item.email}<br/>
        <button 
          className={classes.button}
          variant="contained"
          color="primary"
          endIcon={<Icon>send</Icon>}
        >
          Other Data</button>
        <button className='alignRight'>Update</button>
        <button className='alignRight'>Delete</button>
      </div>
      <div >

      </div>
      <br/>
    </div>
  })


  return(
    <div>
      {items}
    </div>
  )
  
}


export default UserComp;