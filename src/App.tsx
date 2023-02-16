import { CreateTodo } from "./components/CreateTodo";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

function App() {
  return (
    <div>
      <Header />
      <CreateTodo />
      <Tasks />
    </div>
  );
}

export default App;
