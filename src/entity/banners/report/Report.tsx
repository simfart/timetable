import { FC } from "react";
import { testIcon } from "shared/images";
import { CnHomework } from "../homework/HomeWork";

import "./Report.scss";

export const Report: FC = () => {
  return (
    <div className={CnHomework({ color: "violet" })}>
      <p>Отчеты от учителей</p>
      <div className={CnHomework("icon")}>
        <img src={testIcon} alt="Book" />
      </div>
    </div>
  );
};
