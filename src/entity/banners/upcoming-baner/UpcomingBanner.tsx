import { FC } from "react";

import "./UpcomingBanner.scss";

export const UpcomingBanner: FC = () => {
  return (
    <div className="upcoming">
      <h3>Следующее занятие начнется через:</h3>
      <p>
        <mark>6</mark>д <mark>12</mark>ч<mark>24</mark>мин
      </p>
      <button>Button</button>
    </div>
  );
};
