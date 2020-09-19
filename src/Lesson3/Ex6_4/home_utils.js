import axios from 'axios'




const getUsers = async () =>{
  let resp = await axios.get("https://jsonplaceholder.typicode.com/users/")
  let users = resp.data
  console.log(users)
  return users
}

const getTodos = async (id) =>{
  let resp = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
  let allTodos = resp.data;
  let userTodos = allTodos.filter(x => x.userId == id);
  let userTodosTitles = userTodos.map(x=>x.title);
  // console.log(userTodosTitles)
  return userTodosTitles
}

const getPosts = async (id) =>{
  let resp = await axios.get("https://jsonplaceholder.typicode.com/posts")
  let allPosts = resp.data;
  let userPosts = allPosts.filter(x => x.userId == id);
  let userPostsTitles = userPosts.map(x=>x.title);
  return userPostsTitles
}

export default {getUsers, getTodos, getPosts};