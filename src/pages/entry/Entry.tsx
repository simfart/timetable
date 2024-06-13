import { FC } from "react";
import { cn } from "@bem-react/classname";
import { logoSmallIcon } from "shared/images";

import "./Entry.scss";

const CnEntry = cn("entry");

export const Entry: FC = () => {
  return (
    <>
      <>
        <div className={CnEntry("container")}>
          <img src={logoSmallIcon} alt="Logo" />
          <h1>Вход в Sirius Future</h1>
          <form action="">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              required
            ></input>
            <input
              type="password"
              id="psw"
              name="psw"
              placeholder="Пароль"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Должно содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
              required
            ></input>
          </form>
        </div>
        <>
          <p>RU</p>
          <p>EN</p>
        </>
      </>
    </>
  );
};
