import { useState } from "react";
import "./form.css";

function Form({addFunc, onCheckedDel}) {
  const [desc, setDesc] = useState("");

  function submitHandle(e) {
    e.preventDefault();

    if (desc === "") return;

    const newTodo = { desc, done: false, id: Date.now() };

    addFunc(newTodo);

    // console.log(newTodo);
    setDesc("");
  }

  return (
    <form onSubmit={submitHandle}>
      <div style={{ backgroundColor: "#767962" }}>
        <div className="container">
          <input
            className="form-control"
            type="text"
            placeholder="What are you up to?"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></input>
          <div className="btn-wrapper">
            <button type="submit" className="btn btn-add">
              Add
            </button>
            <button onClick={onCheckedDel} type="submit" className="btn btn-delete">
              Delete
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
