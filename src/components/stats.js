import { useState } from "react";
import "./stats.css";

function Stats({clearListFunc}) {
  const [order, setOrder] = useState("Sort by input order");

  function submitHandle(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={submitHandle}>
      <footer>
        <div className="wrapper-order">
          <select className="form-select" value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value='1'>Sort by input order</option>
            <option value="2">Sort by</option>
            <option value="3">Sort by</option>
          </select>
          <button onClick={clearListFunc} type="submit" className="btn btn-delete">
            Clear
          </button>
        </div>
        <p>
          You have N items in your list and you've completed N already (N%).
          Keep it up!
        </p>
      </footer>
    </form>
  );
}

export default Stats;
