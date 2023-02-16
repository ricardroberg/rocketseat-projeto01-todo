import { PlusCircle } from "phosphor-react";
import style from "./CreateTodo.module.css";

export function CreateTodo() {
  return (
    <form action="" className={style.container}>
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
  );
}
