import { CheckCircle, Trash } from "phosphor-react";

import { TasksProps } from "../App";

import styles from "./Task.module.css";

interface TaskProps {
  task: TasksProps;
  onDeleteTask: (taskId: string) => void;
}

export function Task({ task, onDeleteTask }: TaskProps) {
  const isCompleted = true;

  return (
    <div className={styles.taskListContainer}>
      {isCompleted ? (
        <div className="isCompleted">
          <CheckCircle size={22} color="#5059e2" weight="fill" />
        </div>
      ) : (
        <button className={styles.checkContainer}>
          <div />
        </button>
      )}

      <p>{task.title}</p>
      <button
        className={styles.trashIcon}
        onClick={() => onDeleteTask(task.id)}
      >
        <Trash size={20} />
      </button>
    </div>
  );
}
