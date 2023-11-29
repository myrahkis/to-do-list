import "./list.css";

function List({ todos, sortedList, deleteTodo, onDoneCheck}) {
  return (
    <div className="container">
      <div className="wrapper">
        <ul className="list-group list-group-flush">
          {sortedList.map((sortedList) => (
            <Todo todo={sortedList} key={sortedList.id} deleteTodo={deleteTodo} onDoneCheck={onDoneCheck}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Todo({ todo, deleteTodo, onDoneCheck}) {

  return (
    <li className="list-group-item">
      <input
        className="form-check-input me-1"
        type="checkbox"
        value={todo.done}
        onChange={() => onDoneCheck(todo.id)}
      ></input>
      <span className={todo.done ? "done-true" : ""}>{todo.desc}</span>
      {/* <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </button> */}
    </li>
  );
}

export default List;
