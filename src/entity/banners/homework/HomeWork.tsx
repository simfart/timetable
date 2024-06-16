import { FC } from "react";
import { bookIcon } from "shared/images";
import { cn } from "@bem-react/classname";

import "./HomeWork.scss";

export const CnHomework = cn("homework");
export const HomeWork: FC = () => {
  return (
    <div className={CnHomework()}>
      <p>Домашние задания</p>
      <div className={CnHomework("icon")}>
        <img src={bookIcon} alt="Book" />
      </div>
    </div>
  );
};
