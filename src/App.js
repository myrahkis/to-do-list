import { useState } from 'react';
import './App.css';
import Form from './components/form';
import Header from './components/header';
import List from './components/list';
import Stats from './components/stats';

function App() {
  const [list, setList] = useState([]);

  function addTodoHandle(todo) {
    setList((list) => [...list, todo]);
  }
  function clearList(list) {
    setList((list) => []);
  }
  // function deleteTodoHandle(id) {
  //   setList((list) => list.filter((todo) => todo.id !== id));
  // }
  function checkHandle(id) {
    setList((list) => list.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo));
  }
  function checkedTodosHandle() {
    setList((list) => list.filter((todo) => todo.done !== true))
  }

  return (
    <div className='cust-container'>
      <Header />
      <Form addFunc={addTodoHandle} onCheckedDel={checkedTodosHandle}/>
      <List todos={list} onDoneCheck={checkHandle} onCheckedDel={checkedTodosHandle}/>
      <Stats todos={list} clearListFunc={clearList} />
    </div>
  );
}

export default App;
