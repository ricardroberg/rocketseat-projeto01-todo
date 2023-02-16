import { useEffect, useState } from "react";
import TaskList from "./TaskList";

import style from "./Tasks.module.css";

interface TasksProps {
  task: string;
  isDone: boolean;
}

export function Tasks() {
  const [taskCount, setTaskCount] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [tasks, setTasks] = useState([
    {
      task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: true,
    },
    { task: "Estudar React", isDone: false },
    { task: "Fisioterapia", isDone: false },
    { task: "Estudo Faculdade", isDone: false },
    { task: "Projeto particular", isDone: true },
    { task: "Estágio", isDone: false },
  ]);

  useEffect(() => {
    setTaskCount(tasks.length);
  }, [tasks]);

  const tasksCompleted = tasks.filter((task) => task.isDone).length;

  return (
    <div className={style.tasksContainer}>
      <div className={style.taskSummary}>
        <div className={style.createdTasks}>
          Tarefas criadas <span>{taskCount}</span>
        </div>
        <div className={style.tasksDone}>
          Concluídas <span>{tasksCompleted}</span>
        </div>
      </div>
      <TaskList taskList={tasks} />
    </div>
  );
}
