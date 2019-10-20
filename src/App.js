import React, { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "input-change":
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value
      };
    default:
      return state;
  }
}

const initialState = {
  name: "Sardor",
  files: []
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <form
        method="post"
        action="http://localhost:3001/photos/upload"
        encType="multipart/form-data"
      >
        <div className="col s12">
          This is an inline input field:
          <div className="input-field">
            <input id="email_inline" type="email" className="validate" />
            <label htmlFor="email_inline">Email</label>
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              Helper text
            </span>
          </div>
        </div>

        <input
          type="text"
          value={state.name}
          name="title"
          onChange={event =>
            dispatch({
              type: "input-change",
              payload: { name: "name", value: event.target.value }
            })
          }
        />
        <input
          onChange={e => console.log(e.target.files)}
          type="file"
          className="waves-effect waves-light btn"
          name="photos"
          multiple
        />

        <button type="submit" className="waves-effect waves-light btn">
          Upload files
        </button>
      </form>
    </div>
  );
}

export default App;
