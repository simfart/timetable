import { FC } from "react";
import { cn } from "@bem-react/classname";

import "./Balanse.scss";

const CnBalanse = cn("balanse");

export const Balanse: FC = () => {
  return (
    <div className={CnBalanse()}>
      <h3>Баланс занятий</h3>
      <div className={CnBalanse("cards")}>
        <div className={CnBalanse("card")}>
          <p>Ментальная Арифметика</p>
          <div className={CnBalanse("number")}>
            <p>32</p>
          </div>
        </div>
        <div className={CnBalanse("line")}></div>
        <div className={CnBalanse("card")}>
          <p>Программирование</p>
          <div className={CnBalanse("number")}>
            <p>0</p>
          </div>
        </div>
        <div className={CnBalanse("line")}></div>
        <div className={CnBalanse("card")}>
          <p>Скорочтение</p>
          <div className={CnBalanse("number")}>
            <p>4</p>
          </div>
        </div>
      </div>
      <button>Button</button>
    </div>
  );
};
