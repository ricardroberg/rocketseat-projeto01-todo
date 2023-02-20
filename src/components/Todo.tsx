import { Task } from "./Task";
import { TasksProps } from "../App";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import styles from "./Todo.module.css";
import { ClipboardText } from "phosphor-react";

interface TodoProps {
  tasks: TasksProps[];
  onDeleteTask: (taskId: string) => void;
}

export function Todo({ tasks, onDeleteTask }: TodoProps) {
  const tasksQuantity = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.isCompleted).length;

  return (
    <div className={styles.todoContainer}>
      <header className={styles.todoHeader}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p className={styles.tasksCompleted}>Concluídas</p>
          <span>
            {tasksCompleted} de {tasksQuantity}
          </span>
        </div>
      </header>

      {tasks.length ? (
        <div className={styles.tasksList}>
          {tasks.map((task) => {
            return (
              <Task task={task} key={task.id} onDeleteTask={onDeleteTask} />
            );
          })}
        </div>
      ) : (
        <div className={styles.emptyTasks}>
          <input type="text" className={styles.emptyTaskItem} />
          <span className={styles.clipboardIcon}>
            <ClipboardText size={56} />
          </span>
          <span className={styles.text1}>Você ainda não tem tarefas cadastradas</span>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )}
    </div>
  );
}
