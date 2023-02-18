import { Check, ClipboardText, Trash } from "phosphor-react";

import style from "./TaskList.module.css";

interface Tasks {
  task: string;
  isDone: boolean;
}

interface TaskListProps {
  taskList: Tasks[];
  handleTaskCompleted: (task: any) => void;
}

export default function TaskList({
  taskList,
  handleTaskCompleted,
}: TaskListProps) {
  return (
    <div className={style.taskListContainer}>
      {taskList.length ? (
        <div className={style.notEmptyTasks}>
          {taskList.map(({ task, isDone }) => {
            return (
              <div
                onClick={() => handleTaskCompleted(isDone)}
                key={task}
                className={style.taskItemList}
              >
                {isDone ? (
                  <div className={style.isDone}>
                    <Check />
                  </div>
                ) : (
                  <div className={style.notDone} />
                )}
                <div key={task} className={style.taskItem}>
                  {task}
                </div>
                <div className={style.trashIcon}>
                  <Trash size={16} />
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
