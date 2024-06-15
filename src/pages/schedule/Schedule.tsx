import { FC } from "react";
import { Menu } from "widgets/menu";
import { Header } from "widgets/header";
import { cn } from "@bem-react/classname";
import { Calendar } from "../../entity/calendar";

import "./Schedule.scss";

export const CnSchedule = cn("schedule");

export const Schedule: FC = () => {
  return (
    <div className={CnSchedule()}>
      <Menu />
      <div className={CnSchedule("container")}>
        <Header />
        <div className={CnSchedule("textField")}>
          <select>
            <option defaultValue={"Выбрать предмет"} hidden>
              Выбрать предмет
            </option>
            <option>Предмет</option>
          </select>
          <button>Изменить расписание</button>
        </div>
        <Calendar />
      </div>
    </div>
  );
};
