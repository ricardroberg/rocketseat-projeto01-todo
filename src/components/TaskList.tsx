import { useState } from "react";
import {
  CheckCircle,
  Circle,
  CircleNotch,
  ClipboardText,
} from "phosphor-react";

import style from "./TaskList.module.css";

interface Tasks {
  task: string;
  isDone: boolean;
}

interface TaskListProps {
  taskList: Tasks[];
}

export default function TaskList({ taskList }: TaskListProps) {
  return (
    <div className={style.taskListContainer}>
      {taskList.length ? (
        <div className={style.notEmptyTasks}>
          {taskList.map(({ task, isDone }) => {
            return (
              <div className={style.taskItemList}>
                {isDone ? <CheckCircle /> : <Circle />}
                <div key={task} className={style.taskItem}>
                  {task}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={style.emptyTasks}>
          <input type="text" className={style.emptyTaskItem} />
          <span className={style.clipboardIcon}>
            <ClipboardText size={56} />
          </span>
          <p className={style.text1}>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </div>
  );
}
