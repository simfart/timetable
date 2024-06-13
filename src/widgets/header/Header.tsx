import { FC } from "react";
import { cn } from "@bem-react/classname";

import "./Header.scss";

export const CnHeader = cn("header");

export const Header: FC = () => {
  return (
    <div className={CnHeader()}>
      <h1>
        Добро пожаловать, <mark>Михаил</mark>!
      </h1>
    </div>
  );
};
