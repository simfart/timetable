import { FC, useMemo } from "react";
import { cn } from "@bem-react/classname";
import {
  leftIcon,
  rightIcon,
  question2Icon,
  walletIconRed,
} from "shared/images";
import { lessonsStore } from "shared/DateData";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "app/providers/ReduxToolkitProvider";

import "./Calendar.scss";
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  formatDate,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { changeDate } from "./model";

export const cnCalendar = cn("calendar");

export const Calendar: FC = () => {
  const date = useSelector((state: RootState) => state.calendar.date);

  const dates = useMemo(() => {
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(date);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });
    let currentDate = startDate;
    const result = [];

    while (currentDate < endDate) {
      const lessons = lessonsStore[formatDate(currentDate, "dd-MM-yyyy")];
      result.push(
        <div
          className={cnCalendar("date", {
            pass: !isSameMonth(currentDate, date),
          })}
          key={currentDate.getTime()}
        >
          <span>{format(currentDate, "d")}</span>{" "}
          {lessons &&
            lessons.map((lesson, index) => {
              return (
                <div
                  key={index}
                  className={cnCalendar("lesson", {
                    style: lesson.style,
                  })}
                >
                  {lesson.time}
                  <p>{lesson.name}</p>
                  {lesson?.pay && <img src={walletIconRed} alt="" />}
                </div>
              );
            })}
        </div>
      );
      currentDate = addDays(currentDate, 1);
    }

    return result;
  }, [date]);

  const weekData = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const weekItems = useMemo(() => {
    return weekData.map((item) => {
      return <div>{item}</div>;
    });
  }, []);

  const dispatch = useDispatch();

  const leftClickHandler = () => {
    dispatch(changeDate(addMonths(date, -1)));
  };

  const rightClickHandler = () => {
    dispatch(changeDate(addMonths(date, 1)));
  };

  return (
    <div className={cnCalendar()}>
      <div className={cnCalendar("header")}>
        <div className={cnCalendar("month")}>
          <button onClick={leftClickHandler}>
            <img src={leftIcon} alt="" />
          </button>
          <span>{format(date, "MMMM yyyy")}</span>
          <button onClick={rightClickHandler}>
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
