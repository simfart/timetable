import { FC } from "react";
import { cn } from "@bem-react/classname";
// import { chatIcon, passIcon } from "shared/images";

import "./Header.scss";

export const CnHeader = cn("header");

export const Header: FC = () => {
  return (
    <div className={CnHeader()}>
      <h1>
        Добро пожаловать, <mark>Михаил</mark>!
      </h1>
      {/* <>
        <button>
          {" "}
          <img src={chatIcon} alt="chat Icon" />
        </button>
        <button>
          {" "}
          <img src={avatarIcon} alt="avatar Icon" />
        </button>
      </> */}
    </div>
  );
};
