import { PlusCircle } from "phosphor-react";
import style from "./Todo.module.css";
import { Tasks } from "./Tasks";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface TasksProps {
  task: string;
  isDone: boolean;
}

let setCount = 0;

export function Todo() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [newTask, setNewTask] = useState("");

  function onTaskCreate(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, { task: newTask, isDone: false }]);
    setNewTask("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(({ task }) => {
      return task !== taskToDelete;
    });
    setTasks(tasksWithoutDeletedOne);
  }

  // function getTaskCompletedCount(count: number){
  //   return count
  // }

  const getTaskCompletedCount = (count: number) => {
    return count;
  }

  return (
    <div className={style.container}>
      <form className={style.formInput} onSubmit={onTaskCreate}>
        <input
          name="task"
          className={style.inputTodo}
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleNewCommentChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button className={style.createTodoButton}>
          <span>Criar</span>
          <PlusCircle size={24} />
        </button>
      </form>
      <div className={style.tasksContainer}>
        <div className={style.taskSummary}>
          <div className={style.createdTasks}>
            Tarefas criadas <span>{tasks?.length}</span>
          </div>
          <div className={style.tasksDone}>
            Concluídas{" "}
            <span>
              {tasks?.length === 0 ? 0 : `${getTaskCompletedCount} de ${tasks?.length}`}
            </span>
          </div>
        </div>
      </div>

      {tasks.map(({ task, isDone }) => {
        return (
          <Tasks
            key={task}
            task={task}
            isDone={isDone}
            onDeleteTask={deleteTask}
            completedCount={getTaskCompletedCount}
          />
        );
      })}
    </div>
  );
}
