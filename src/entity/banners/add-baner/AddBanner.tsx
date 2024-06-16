import { FC } from "react";
import { addBannerIcon } from "shared/images";

import "./AddBanner.scss";
export const AddBanner: FC = () => {
  return (
    <div className="baner">
      <h2>До 31 декабря любой курс со скидкой 20%</h2>
      <p>
        До конца года у вас есть уникальная возможность воспользоваться нашей
        новогодней скидкой 20% на любой курс!
      </p>
      <img src={addBannerIcon} alt="Presents" />
    </div>
  );
};
