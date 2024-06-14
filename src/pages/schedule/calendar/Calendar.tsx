import { FC, useMemo } from "react";
import { cn } from "@bem-react/classname";
import {
  leftIcon,
  rightIcon,
  question2Icon,
  walletIconRed,
} from "shared/images";
import { DayData } from "shared/DateData";

import "./Calendar.scss";

export const cnCalendar = cn("calendar");

export const Calendar: FC = () => {
  const weekData = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const weekItems = useMemo(() => {
    return weekData.map((item) => {
      return <div>{item}</div>;
    });
  }, []);

  const dates = useMemo(() => {
    return DayData.map((item, index) => (
      <div className={cnCalendar("date", { pass: item.pass })} key={index}>
        <span>{item.day}</span>{" "}
        <div
          className={cnCalendar("lesson", {
            style: item.lessons?.lesson.style,
          })}
        >
          {item.lessons?.lesson.time}
          <p>{item.lessons?.lesson.name}</p>
          {item.lessons?.lesson.pay && <img src={walletIconRed} alt="" />}
        </div>
        {item.lessons?.lesson2 ? (
          <div
            className={cnCalendar("lesson", {
              style: item.lessons?.lesson2?.style,
            })}
          >
            {item.lessons?.lesson2?.time}
            <p>{item.lessons?.lesson?.name}</p>
            {item.lessons?.lesson.pay && <img src={walletIconRed} alt="" />}
          </div>
        ) : (
          ""
        )}
      </div>
    ));
  }, []);

  return (
    <div className={cnCalendar()}>
      <div className={cnCalendar("header")}>
        <div className={cnCalendar("month")}>
          <button>
            <img src={leftIcon} alt="" />
          </button>
          <span>Март 2024</span>
          <button>
            {" "}
            <img src={rightIcon} alt="" />
          </button>
        </div>
        <button className={cnCalendar("btn__today")}>Сегодня</button>
        <button className={cnCalendar("btn__support")}>
          <img src={question2Icon} alt="question Icon" />
        </button>
      </div>
      <div className={cnCalendar("container")}>
        <div className={cnCalendar("week")}>{weekItems}</div>
        <div className={cnCalendar("dates")}>{dates}</div>
      </div>
    </div>
  );
};
