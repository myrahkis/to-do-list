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

  return (
    <div className='cust-container'>
      <Header />
      <Form addFunc={addTodoHandle}/>
      <List todos={list}/>
      <Stats clearListFunc={clearList}/>
    </div>
  );
}

export default App;
