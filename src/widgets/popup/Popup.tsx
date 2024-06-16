import { FC } from "react";
import { cn } from "@bem-react/classname";
import {
  avatarIcon,
  avatar2Icon,
  exitIcon,
  closeIcon,
  upIcon,
} from "shared/images";

import "./Popup.scss";

const CnPopup = cn("popup");
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export const Popup: FC<ModalProps> = ({ isOpen, onClose, onLogout }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={CnPopup()}>
      <h2>Смена пользователя</h2>
      <div>
        <div className={CnPopup("item", { current: true })}>
          <img src={avatarIcon} alt="avatar Icon" />
          <div className={CnPopup("name")}>
            <p>Михаил</p>
            <span>Это вы</span>
          </div>
        </div>
        <div className={CnPopup("item")}>
          <img src={avatar2Icon} alt="avatar Icon" />
          <div className={CnPopup("name")}>
            <p>Анна</p>
          </div>
        </div>
      </div>
      <div className={CnPopup("line")}></div>
      <button className={CnPopup("exit")} onClick={onLogout}>
        <span>Выход</span>
        <img src={exitIcon} alt="exit" />
      </button>
      <button className={CnPopup("close")} onClick={onClose}>
        <img src={closeIcon} alt="close Icon" />
      </button>

      <img className={CnPopup("upElement")} src={upIcon} alt="up Icon" />
    </div>
  );
};
