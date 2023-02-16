import React, { useState } from "react";
import { ClipboardText } from "phosphor-react";

export default function TaskList() {
  const [taskCount, setTaskCount] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      {tasks.length ? (
        <div>Lista de Tarefas</div>
      ) : (
        <div>
          <span>
            <ClipboardText size={56} />
          </span>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </div>
  );
}
