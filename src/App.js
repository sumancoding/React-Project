//Components have structures and API's and reusable. React state cannot be modified directly
// Think of useState as a short term memory for the app

import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Todo from "./components/Todo";
import { db } from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);

  //when the app loads, we need to listen to the database and fetch mew todos as they get added/removed

  useEffect(() => {
    //this code fires when the app.js loads
    db.collection("todos").onSnapShot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);

  const [input, setInput] = useState("");

  const addTodo = (e) => {
    //this fires up when we click the button
    e.preventDefault();
    setTodos([...todos, input]);
    setInput(""); // clear up the input after hitting submit
  };

  return (
    <div className="App">
      <h1>Creating a To do List </h1>
      <form>
        <FormControl>
          {/* material Icons in MUI*/}

          <InputLabel>
            {" "}
            <AddTaskIcon />
            Add To do here
          </InputLabel>
          <Input
            type="text"
            placeholder="Enter to do list"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </FormControl>

        <Button
          variant="contained"
          type="submit"
          onClick={addTodo}
          disabled={!input}
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
