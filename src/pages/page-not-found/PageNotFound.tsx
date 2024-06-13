import { FC } from "react";
import { Link } from "react-router-dom";

export const PageNotFound: FC = () => {
  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span> Page Not Found
      </h3>
      <Link className="button button_type_to-main" to="/">
        Назад
      </Link>
    </div>
  );
};
