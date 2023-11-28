import "./list.css";

// const todos = [
//   {
//     id: 1,
//     desc: "test test test",
//     done: true,
//   },
//   {
//     id: 2,
//     desc: "test test test test test test",
//     done: true,
//   },
//   {
//     id: 3,
//     desc: "test test test",
//     done: false,
//   },
// ];

function List({todos}) {
  return (
    <div className="container">
      <div className="wrapper">
        <ul className="list-group list-group-flush">
          {todos.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Todo({ todo }) {
  return (
    <li className="list-group-item">
      <input className="form-check-input me-1" type="checkbox"></input>
      <span className={todo.done ? 'done-true' : ''}>
        {todo.desc}
      </span>
    </li>
  );
}

export default List;
