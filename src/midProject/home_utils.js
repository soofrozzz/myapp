import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com';

const getUsers = async () =>{
  const response = await axios.get(`${URL}/users`);
  return response.data;
}

const getTodos = async (id) =>{
  const allTodos = await getTodosAll();
  return allTodos.filter(x => x.userId === id).map(x=>x.title);
   }

const getTodosAll = async () =>{
  const response = await axios.get(`${URL}/todos`);
  return response.data;
}

const getPosts = async (id) =>{
  const response = await axios.get(`${URL}/posts`)
  return response.data.filter(x => x.userId === id).map(x=>x.title);
}

const search = (users, search) => users.filter(x => x.name.toLowerCase().includes(search) || x.email.toLowerCase().includes(search));

export default {getUsers, getTodos, getTodosAll, getPosts, search};