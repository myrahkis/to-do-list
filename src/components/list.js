import "./list.css";

function List() {
  const done = false;
  return (
    <div className="container">
      <div className="wrapper">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox"></input>
            <span className="done-true">Test test test</span>
          </li>
          <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox"></input>
            <span className="done-true">Test test test Test test test</span>
          </li>
          <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox"></input>
            <span className="done-true">Test test test</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default List;
