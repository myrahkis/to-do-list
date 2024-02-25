import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/form";
import Header from "./components/header";
import List from "./components/list";
import Stats from "./components/stats";

function App() {
  const [list, setList] = useState(function () {
    let stored = localStorage.getItem("todos");

    if (stored === null) return (stored = []);

    return JSON.parse(stored);
  });
  const [order, setOrder] = useState("input");

  useEffect(
    function () {
      localStorage.setItem("todos", JSON.stringify(list));
    },
    [list]
  );

  function addTodoHandle(todo) {
    setList((list) => [...list, todo]);
  }
  function clearList(list) {
    const comfirm = window.confirm(
      "Are you sure you want to delete the whole list?"
    );

    if (comfirm) setList((list) => []);
  }
  // function deleteTodoHandle(id) {
  //   setList((list) => list.filter((todo) => todo.id !== id));
  // }
  function checkHandle(id) {
    setList((list) =>
      list.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  function checkedTodosHandle() {
    setList((list) => list.filter((todo) => todo.done !== true));
  }

  function handleSorting(e) {
    setOrder(e.target.value);
  }

  let sortedList;

  if (order === "input") sortedList = list;
  if (order === "firstLetter")
    sortedList = list.slice().sort((a, b) => a.desc.localeCompare(b.desc));
  if (order === "completion")
    sortedList = list.slice().sort((a, b) => +a.done - +b.done);

  return (
    <div className="cust-container">
      <Header />
      <Form addFunc={addTodoHandle} onCheckedDel={checkedTodosHandle} />
      <List
        todos={list}
        sortedList={sortedList}
        onDoneCheck={checkHandle}
        onCheckedDel={checkedTodosHandle}
      />
      <Stats
        todos={list}
        order={order}
        handleSorting={handleSorting}
        clearListFunc={clearList}
      />
    </div>
  );
}

export default App;
