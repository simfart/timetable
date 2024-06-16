import { cn } from "@bem-react/classname";
import { FC } from "react";
import { Link } from "react-router-dom";

import "./PageNotFound.scss";
const CnNotFound = cn("notfound");

export const PageNotFound: FC = () => {
  return (
    <div className={CnNotFound()}>
      <h1>404</h1>
      <p className="not-found__title">Page Not Found</p>
      <Link className="button button_type_to-main" to="/">
        Назад
      </Link>
    </div>
  );
};
