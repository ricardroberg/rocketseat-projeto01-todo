import { Todo } from "./components/Todo";

import style from "./App.module.css";
import Logo from "./assets/logo.svg";

function App() {
  return (
    <div>
      <header className={style.header}>
        <span>
          <img src={Logo} alt="" className={style.logo} />
        </span>
      </header>
      <Todo />
    </div>
  );
}

export default App;
