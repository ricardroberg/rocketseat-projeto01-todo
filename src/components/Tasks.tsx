import { useEffect, useState } from "react";
import TaskList from "./TaskList";

import style from "./Tasks.module.css";

interface TasksProps {
  task: string;
  isDone: boolean;
}

export function Tasks() {
  const [taskCount, setTaskCount] = useState(0);
  const [taskComplete, setTasksComplete] = useState(false);
  const [tasks, setTasks] = useState([
    {
      task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: taskComplete,
    },
    { task: "Estudar React", isDone: taskComplete },
    { task: "Fisioterapia", isDone: taskComplete },
    { task: "Estudo Faculdade", isDone: taskComplete },
    { task: "Projeto particular", isDone: taskComplete },
    { task: "Estágio", isDone: taskComplete },
  ]);

  useEffect(() => {
    setTaskCount(tasks.length);
  }, [tasks]);

  function handleTaskCompleted(isDone: boolean) {
    if (!isDone) {
      isDone = true;
    }
  }

  const tasksCompleted = tasks.filter((task) => task.isDone).length;

  return (
    <div className={style.tasksContainer}>
      <div className={style.taskSummary}>
        <div className={style.createdTasks}>
          Tarefas criadas <span>{taskCount}</span>
        </div>
        <div className={style.tasksDone}>
          Concluídas{" "}
          <span>
            {tasksCompleted === 0 ? 0 : `${tasksCompleted} de ${taskCount}`}
          </span>
        </div>
      </div>
      <TaskList taskList={tasks} handleTaskCompleted={handleTaskCompleted} />
    </div>
  );
}
