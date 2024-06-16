import { useState } from "react";
import { cn } from "@bem-react/classname";
import { Popup } from "widgets/popup";
import { chatIcon, avatarIcon, menuIcon, notificatonIcon } from "shared/images";

import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from "shared/hooks/useAuth";

export const CnHeader = cn("header");
interface HeaderProps {
  page?: string;
}

export const Header = ({ page }: HeaderProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openPopup = () => {
    setModalOpen(true);
  };

  const closePopup = () => {
    setModalOpen(false);
  };

  const { logout } = useAuth();

  const navigate = useNavigate();
  const onLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className={page === "home" ? CnHeader({ style: "home" }) : CnHeader()}>
      {page === "home" && (
        <h1>
          Добро пожаловать, <mark>Михаил</mark>!
        </h1>
      )}
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
        <div className={CnHeader("dropdown")}>
          <button className={CnHeader("dropdownButton")} onClick={openPopup}>
            <img src={avatarIcon} alt="avatar Icon" />
            <img
              className={CnHeader("menu")}
              src={menuIcon}
              alt="avatar Icon"
            />
          </button>
          <Popup
            isOpen={isModalOpen}
            onClose={closePopup}
            onLogout={onLogout}
          />
        </div>
      </div>
    </div>
  );
};
