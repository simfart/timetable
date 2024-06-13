import { FC } from "react";
import { cn } from "@bem-react/classname";
import { leftIcon, rightIcon, question2Icon } from "shared/images";

import "./Calendar.scss";

export const cnCalendar = cn("calendar");

export const Calendar: FC = () => {
  return (
    <>
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
      <button>Сегодня</button>
      <button>
        <img src={question2Icon} alt="questionIcon" />
      </button>
    </>
  );
};
