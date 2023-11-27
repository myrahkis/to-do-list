import "./stats.css";

function Stats() {
  return (
    <footer>
      <div className="wrapper-order">
        <select className="form-select">
          <option selected>Sort by input order</option>
          <option value="1">One</option>
          <option value="2">Two</option>
        </select>
        <button type="submit" className="btn btn-delete">
          Clear
        </button>
      </div>
      <p>You have N items in your list and you've completed N already (N%)</p>
    </footer>
  );
}

export default Stats;
