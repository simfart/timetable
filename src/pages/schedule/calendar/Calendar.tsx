import { FC, useMemo } from "react";
import { cn } from "@bem-react/classname";
import { leftIcon, rightIcon, question2Icon } from "shared/images";

import "./Calendar.scss";

export const cnCalendar = cn("calendar");

export const Calendar: FC = () => {
  const weekData = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const weekItems = useMemo(() => {
    return weekData.map((item) => {
      return <th>{item}</th>;
    });
  }, []);

  const tableTest = [1, 2, 3, 4, 5, 7, 8, 9, 10];
  const testTable = useMemo(() => {
    return tableTest.map((item) => {
      for (let i = 0; i < tableTest.length; i++) {
        if (i % 7 === 0) {
          return <th>{item}</th>;
        }
      }

      return <th>{item}</th>;
    });
  }, []);

  console.log(testTable);

  const createCalendar = () => {
    let table = "";
    const days = 31;
    const prevMonthDays = 4;

    for (let i = 0; i < prevMonthDays; i++) {
      table += "<td></td>";
    }
    for (let j = 1; j <= days; j++) {
      table += "<td>" + j + "</td>";
      if (j % 7 == 6) {
        // вс, последний день - перевод строки
        table += "</tr><tr>";
      }
    }
    table += "</tr>";
    return table;
  };

  // for (var i = 1; i <= days; i++) {
  //   table += "<td>" + i + "</td>";
  //   if (i % 7 === 0) table += "</tr><tr>"; // Add a new week row?
  // }

  // // APPEND EMPTY CELLS
  // for (var i = 0; i < appendEmptyDays; i++) {
  //   table += "<td></td>";
  // }

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
          <img src={question2Icon} alt="questionIcon" />
        </button>
      </div>
      <table>
        <tr> {weekItems}</tr>
        <tr>
          <td>
            {" "}
            <span>26</span>
          </td>
          <td>
            <span>27</span>
          </td>
          <td>
            <span>28</span>
          </td>
        </tr>
        <tr>{testTable}</tr>
      </table>
    </div>
  );
};
