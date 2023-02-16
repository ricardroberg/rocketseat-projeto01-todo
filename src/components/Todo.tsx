import { PlusCircle } from "phosphor-react";
import style from "./Todo.module.css";
import { Tasks } from "./Tasks";

export function Todo() {

  
  return (
    <div className={style.container}>
      <form action="" className={style.formInput}>
        <input
          className={style.inputTodo}
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button className={style.createTodoButton}>
          <span>Criar</span>
          <PlusCircle size={24} />
        </button>
      </form>
      <Tasks />
    </div>
  );
}
