import axios from 'axios'

const getFullUserData = async (id) =>{
  // let id = this.state.searchID;
  let userData = {}
  let resp1 = await axios.get("https://jsonplaceholder.typicode.com/users/" + id)
  let name = resp1.data.name;
  let email = resp1.data.email;

  let resp2 = await axios.get("https://jsonplaceholder.typicode.com/todos")
  let allTodos = resp2.data;
  let userTodos = allTodos.filter(x => x.userId == id);
  let userTodosTitles = userTodos.map(x=>x.title);
  let userTop5 = userTodosTitles.splice(0,5);

  let resp3 = await axios.get("https://jsonplaceholder.typicode.com/posts")
  let allPosts = resp3.data;
  let userPosts = allPosts.filter(x => x.userId == id);
  let userPostTitle = userPosts[0].title

  userData = {name : name, email : email, posts : userTop5, todoTitle : userPostTitle}

  console.log(userData);

  return userData
}


export default {getFullUserData};