import { FC } from "react";
import { cn } from "@bem-react/classname";
import { humanIcon } from "shared/images";

import "./Schedules.scss";

const CnSchedules = cn("schedules");

export const Schedules: FC = () => {
  return (
    <div className={CnSchedules()}>
      <h3>Ближайшие уроки</h3>
      <div className={CnSchedules("cards")}>
        <div className={CnSchedules("card")}>
          <>
            <div className={CnSchedules("date")}>
              <p>1</p>
              <span>мая</span>
            </div>
            <p className={CnSchedules("title")}>Ментальная Арифметика</p>
          </>
          <div className={CnSchedules("timeTeacher")}>
            <p>14:00-14:25</p>
            <div className={CnSchedules("teacher")}>
              <img src={humanIcon} alt="human Icon" />
              Белкина Инна
            </div>
          </div>
          <div className={CnSchedules("buttons")}>
            <button className={CnSchedules("button", { style: "greyBorer" })}>
              Button
            </button>
            <button className={CnSchedules("button")}>Button</button>
          </div>
        </div>
        <div className={CnSchedules("line")}></div>

        <div className={CnSchedules("card")}>
          <>
            <div className={CnSchedules("date")}>
              <p>30</p>
              <span>октября</span>
            </div>
            <p className={CnSchedules("title")}>Программирование</p>
          </>
          <div className={CnSchedules("timeTeacher")}>
            <p>11:00-11:11</p>
            <div className={CnSchedules("teacher")}>
              <img src={humanIcon} alt="human Icon" />
              Животновская Оксана
            </div>
          </div>
          <div className={CnSchedules("buttons")}>
            <button className={CnSchedules("button", { style: "greyBorer" })}>
              Button
            </button>
            <button className={CnSchedules("button")}>Button</button>
          </div>
        </div>
        <div className={CnSchedules("line")}></div>
        <div className={CnSchedules("card")}>
          <>
            <div className={CnSchedules("date")}>
              <p>16</p>
              <span>ноября</span>
            </div>
            <p className={CnSchedules("title")}>Скорочтение</p>
          </>
          <div className={CnSchedules("timeTeacher")}>
            <p>11:00-11:11</p>
            <div className={CnSchedules("teacher")}>
              <img src={humanIcon} alt="human Icon" />
              Мин Елена
            </div>
          </div>
          <div className={CnSchedules("buttons")}>
            <button className={CnSchedules("button", { style: "greyBorer" })}>
              Button
            </button>
            <button className={CnSchedules("button")}>Button</button>
          </div>
        </div>
      </div>
      <button className={CnSchedules("bigButton")}>Button</button>
    </div>
  );
};
