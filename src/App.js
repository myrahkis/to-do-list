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
  function deleteTodoHandle(id) {
    setList((list) => list.filter((todo) => todo.id !== id));
  }

  return (
    <div className='cust-container'>
      <Header />
      <Form addFunc={addTodoHandle} />
      <List todos={list} deleteTodo={deleteTodoHandle} />
      <Stats clearListFunc={clearList} />
    </div>
  );
}

export default App;
