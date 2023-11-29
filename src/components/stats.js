import { useState } from "react";
import "./stats.css";

function Stats({ todos, clearListFunc }) {
  const [order, setOrder] = useState("Sort by input order");

  const length = todos.length;
  const completedTodos = todos.filter((todo) => todo.done).length;
  const percentage = Math.round(completedTodos / length * 100);

  function submitHandle(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={submitHandle}>
      <footer>
        <div className="wrapper-order">
          <select
            className="form-select"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="1">Sort by input order</option>
            <option value="2">Sort by</option>
            <option value="3">Sort by</option>
          </select>
          <button
            onClick={clearListFunc}
            type="submit"
            className="btn btn-delete"
          >
            Clear
          </button>
        </div>
        {length > 0 ? (
          <p>
            You have {length === 1 ? `${length} todo` : `${length} todos`} in your list and you've completed{" "}
            {completedTodos === length ? "all" : `${completedTodos} for now`}. 
            {completedTodos > 0 ? ` It's ${percentage}%!` : ''} 
            {percentage === 100 ? ' Keep it up!' : ''}
          </p>
        ) : (
          <p>Add some todos to see stats!</p>
        )}
      </footer>
    </form>
  );
}

export default Stats;
