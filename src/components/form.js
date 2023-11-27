import "./form.css";

function Form() {
  return (
    <div style={{ backgroundColor: "#767962" }}>
      <div className="container">
        <input
          className="form-control"
          type="text"
          placeholder="What are you up to?"
        ></input>
        <div className="btn-wrapper">
          <button type="submit" class="btn btn-add">
            Add
          </button>
          <button type="submit" class="btn btn-delete">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
