import Logo from "../assets/logo.svg";

import style from './Header.module.css'

export function Header() {
  return (
    <header className={style.header}>
    <span>
      <img src={Logo} alt="" className={style.logo} />
    </span>
  </header>
  )
}
