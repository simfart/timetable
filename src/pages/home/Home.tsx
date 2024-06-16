import { FC } from "react";
import { Menu } from "widgets/menu";
import { Header } from "widgets/header";
import { cn } from "@bem-react/classname";
import {
  AddBanner,
  UpcomingBanner,
  HomeWork,
  Report,
  Balanse,
  Schedules,
} from "entity/banners";

import "./Home.scss";

const CnHome = cn("home");

export const Home: FC = () => {
  return (
    <div className={CnHome()}>
      <Menu />
      <div className={CnHome("container")}>
        <Header page="home" />
        <div className={CnHome("banners")}>
          <AddBanner />
          <UpcomingBanner />
          <HomeWork />
          <Report />
        </div>
        <div className={CnHome("numbers")}>
          <Balanse />
          <Schedules />
        </div>
      </div>
    </div>
  );
};
