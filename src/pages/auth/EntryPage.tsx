import { FC } from "react";
import { cn } from "@bem-react/classname";
import { logoSmallIcon } from "shared/images";
import { AuthForm } from "entity/auth-form";

import "./EntryPage.scss";

const CnEntry = cn("entry");

export const EntryPage: FC = () => {
  return (
    <div className={CnEntry()}>
      <img src={logoSmallIcon} alt="Logo" />
      <AuthForm
        title="Вход в Sirius Future"
        buttonText="Войти"
        linkUrl="/register"
        linkText="Register"
      />
      <div className={CnEntry("btns")}>
        <button className={CnEntry("lang", { selected: true })}>RU</button>
        <button className={CnEntry("lang")}>EN</button>
      </div>
    </div>
  );
};
