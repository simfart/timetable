import { FC } from "react";
import { Menu } from "widgets/menu";
import { Header } from "widgets/header";
import { cn } from "@bem-react/classname";

import "./Main.scss";

export const CnSchedule = cn("main");

export const Main: FC = () => {
  return (
    <div className={CnSchedule()}>
      <Menu />
      <div className={CnSchedule("container")}>
        <Header />
        <div className={CnSchedule("banners")}>
          <div className="baner"></div>
          <div className="upcoming"></div>
          <div className="homework"></div>
          <div className="report"></div>
        </div>
        <div className={CnSchedule("numbers")}>
          <div className="balanse"></div>
          <div className="schedules"></div>
        </div>
      </div>
    </div>
  );
};
