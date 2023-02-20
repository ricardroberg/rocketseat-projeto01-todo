import { Check, Trash } from "phosphor-react";

import { TasksProps } from "../App";

import styles from "./Task.module.css";

interface TaskProps {
  task: TasksProps;
  onDeleteTask: (taskId: string) => void;
  toggleCompleted: (taskId: string) => void;
}

export function Task({ task, onDeleteTask, toggleCompleted }: TaskProps) {
  return (
    <div className={styles.taskListContainer}>
      <button
        className={styles.checkContainer}
        onClick={() => toggleCompleted(task.id)}
      >
        {task.isCompleted ? (
          <div className={styles.isCompleted}>
            <Check size={14} color="#ffffff" weight="bold" />
          </div>
        ) : (
          <div className={styles.notCompleted} />
        )}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>
      <button
        className={styles.trashIcon}
        onClick={() => onDeleteTask(task.id)}
      >
        <Trash size={20} />
      </button>
    </div>
  );
}
