import { useEffect, useState } from "react";

import style from "./Tasks.module.css";
import { Check, ClipboardText, Trash } from "phosphor-react";

interface TasksProps {
  task: string;
  isDone: boolean;
  onDeleteTask: (task: string) => void;
  completedCount: (count: number) => void;
}
[];

export function Tasks({
  task,
  isDone,
  onDeleteTask,
  // completedCount,
}: TasksProps) {
  const [isTaskDone, setIsTaskDone] = useState(isDone);
  // const [taskCompletedCount, setTaskCompletedCount] = useState(0);

  // useEffect(() => {
  //   if (isTaskDone === true) {
  //     setTaskCompletedCount(taskCompletedCount + 1);
  //   } else if (isTaskDone === false && taskCompletedCount > 0) {
  //     setTaskCompletedCount(taskCompletedCount - 1);
  //   }
  // }, [isTaskDone]);

  // completedCount(taskCompletedCount);

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  function onTaskComplete() {
    setIsTaskDone(!isTaskDone);
  }

  return (
    <div className={style.taskListContainer}>
      {task?.length ? (
        <div className={style.notEmptyTasks}>
          <div
            key={task}
            className={style.taskItemList}
            onClick={onTaskComplete}
          >
            {isTaskDone ? (
              <div className={style.isDone}>
                <Check />
              </div>
            ) : (
              <div className={style.notDone} />
            )}
            <div
              key={task}
              className={
                isTaskDone ? style.taskItemCompleted : style.taskItemIncomplete
              }
            >
              {task}
            </div>
            <div className={style.trashIcon} onClick={handleDeleteTask}>
              <Trash size={16} />
            </div>
          </div>
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
