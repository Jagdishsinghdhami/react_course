import { useContext, useState } from "react";
import { TasksDispatchContext } from "./TaskContext";

let nextId = 3;

const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);
  return (
    <div>
      <h2>Add Task</h2>
      <input
        value={text}
        placeholder="Add Task"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
