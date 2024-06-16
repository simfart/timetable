import { FC, useState } from "react";
import { cn } from "@bem-react/classname";
import { ChangeUserPopup } from "widgets/changeUser";
// import { chatIcon, passIcon } from "shared/images";
import {
  chatIcon,
  avatar2Icon,
  avatarIcon,
  menuIcon,
  notificatonIcon,
} from "shared/images";

import "./Header.scss";

export const CnHeader = cn("header");

export const Header: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={CnHeader()}>
      <h1>
        Добро пожаловать, <mark>Михаил</mark>!
      </h1>
      <div className={CnHeader("buttons")}>
        <button className={CnHeader("chat")}>
          {" "}
          <img className={CnHeader("icon")} src={chatIcon} alt="chat Icon" />
          <img
            className={CnHeader("notification")}
            src={notificatonIcon}
            alt="notificaton Icon"
          />
        </button>
        <button className={CnHeader("dropdown")} onClick={openModal}>
          <img src={avatarIcon} alt="avatar Icon" />
          <img className={CnHeader("menu")} src={menuIcon} alt="avatar Icon" />
        </button>
        <ChangeUserPopup isOpen={isModalOpen} onClose={closeModal} />
      </div>
      
    </div>
  );
};
