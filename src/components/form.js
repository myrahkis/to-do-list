import { useState } from "react";
import "./form.css";

function Form() {
  const [desc, setDesc] = useState('');

  function submitHandle(e) {
    e.preventDefault();

    
    if (desc === '')
        return;

    // console.log(desc);
    setDesc('');
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
            <button type="submit" className="btn btn-delete">
              Delete
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
