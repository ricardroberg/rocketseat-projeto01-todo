import { useState } from "react";
import uuid from "react-uuid";

import { Todo } from "./components/Todo";
import Header from "./components/Header";

export interface TasksProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([
    {
      id: "42342-342-4234234-24",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isCompleted: false,
    },
    {
      id: "42342-342-4234234-25",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isCompleted: true,
    },
  ]);

  function handleAddTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: uuid(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function handleDeleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div>
      <Header onAddTask={handleAddTask} />
      <Todo
       tasks={tasks} 
       onDeleteTask={handleDeleteTaskById} 
       toggleCompleted={toggleTaskCompletedById}/>
    </div>
  );
}

export default App;
