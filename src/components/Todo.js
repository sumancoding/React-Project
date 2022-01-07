// Renders a todo object and handles its action
import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import "../App.css";

function Todo(props) {
  return (
    <div className="to-do">
      <List>
        <ListItem>
          <ListItemText primary="Todo" secondary={props.todo} />
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;
