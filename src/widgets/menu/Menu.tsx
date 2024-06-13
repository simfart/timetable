import { FC, useMemo } from "react";
import { cn } from "@bem-react/classname";
import { NavLink } from "react-router-dom";
import {
  logoIcon,
  homeIcon,
  walletIcon,
  calendarIcon,
  folderIcon,
  cupIcon,
  helpIcon,
  puzzleIcon,
  setIcon,
  questionIcon,
  present,
} from "shared/images";

import "./Menu.scss";

export const CnMenu = cn("menu");

const menuData = [
  {
    name: "Главная",
    icon: homeIcon,
    path: "/",
  },
  {
    name: "Расписание",
    icon: calendarIcon,
    path: "/schedule",
  },
  {
    name: "Оплата",
    icon: walletIcon,
    path: "*",
  },
  {
    name: "Достижения",
    icon: cupIcon,
    path: "*",
  },
  {
    name: "Тренажеры",
    icon: puzzleIcon,
    path: "*",
  },
  {
    name: "Библиотека",
    icon: folderIcon,
    path: "*",
  },

  {
    name: "Проверка связи",
    icon: helpIcon,
    path: "*",
  },

  {
    name: "Настройки",
    icon: setIcon,
    path: "*",
  },
  {
    name: "Вопросы",
    icon: questionIcon,
    path: "*",
  },
];

export const Menu: FC = () => {
  const MenuItems = useMemo(() => {
    return menuData.map((item, index) => {
      return (
        <li key={index}>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? CnMenu("link", { active: true })
                : CnMenu("link")
            }
            to={item.path}
          >
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </NavLink>
        </li>
      );
    });
  }, []);

  return (
    <nav className={CnMenu()}>
      <img className={CnMenu("logo")} src={logoIcon} alt="Logo" />
      <ul>{MenuItems}</ul>
      <div className={CnMenu("referal")}>
        <h3>Учитесь бесплатно</h3>
        <p>
          Приводите друзей с детьми заниматься в Sirius Future и получайте
          подарки!
        </p>
        <button>Узнать</button>
        <img src={present} alt="Present" />
      </div>
    </nav>
  );
};
