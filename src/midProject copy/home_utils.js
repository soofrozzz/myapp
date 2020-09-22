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
  let userTodos = allTodos.filter(x => x.userId === id);
  let userTodosTitles = userTodos.map(x=>x.title);
  // console.log(userTodosTitles)
  return userTodosTitles
}

const getTodosAll = async () =>{
  let resp = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
  let allTodos = resp.data;
  return allTodos
}

const getPosts = async (id) =>{
  let resp = await axios.get("https://jsonplaceholder.typicode.com/posts")
  let allPosts = resp.data;
  let userPosts = allPosts.filter(x => x.userId === id);
  let userPostsTitles = userPosts.map(x=>x.title);
  return userPostsTitles
}

const search = (users, search) =>{
  let filteredUsers = users.filter(x => x.name.toLowerCase().includes(search) || x.email.toLowerCase().includes(search))
  return filteredUsers
}

export default {getUsers, getTodos, getTodosAll, getPosts, search};