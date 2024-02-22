import AddTask from "./AddTask";
import { TasksProvider } from "./TaskContext";
import TaskList from "./TaskList";

const TodoApp = () => {
  return (
    <div>
      <TasksProvider>
        <h1>Day off in Jagdish</h1>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </div>
  );
};

export default TodoApp;
