import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import Logo from "../assets/logo.svg";
import styles from "./Header.module.css";

interface HeaderProps {
  onAddTask: (taskTitle: string) => void;
}

export default function Header({ onAddTask }: HeaderProps) {
  const [title, setTitle] = useState("");

  function handleSubmitTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onAddTask(title);

    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

 return (
    <>
      <header className={styles.headerContainer}>
        <img src={Logo} alt="" className={styles.logo} />

        <form className={styles.formInput} onSubmit={handleSubmitTask}>
          <input
            name="task"
            className={styles.inputTodo}
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={onChangeTitle}
            value={title}
            required
          />
          <button className={styles.createTodoButton}>
            <span>Criar</span>
            <PlusCircle size={24} />
          </button>
        </form>
      </header>
    </>
  );
}
