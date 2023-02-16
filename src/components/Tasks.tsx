import React from "react";
import TaskList from "./TaskList";

export function Tasks() {
  return (
    <div>
      <div>
        <div>Tarefas criadas 0</div>
        <div>Concluídas</div>
      </div>
      <div>
        <TaskList />
      </div>
    </div>
  );
}
