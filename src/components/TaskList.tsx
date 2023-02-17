import { useState } from "react";
import {
  CheckCircle,
  Circle,
  CircleNotch,
  ClipboardText,
  Trash,
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
                <span className={isDone ? style.isDone : style.notDone}>
                  {isDone ? (
                    <CheckCircle color="#5E60CE" cursor={2} weight="fill" />
                  ) : (
                    <Circle />
                  )}
                </span>
                <div key={task} className={style.taskItem}>
                  {task}
                </div>
                <Trash color="#808080"/>
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
