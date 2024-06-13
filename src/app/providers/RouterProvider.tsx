import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "pages/main";
import { Entry } from "pages/entry";
import { Schedule } from "pages/schedule";
import { PageNotFound } from "pages/page-not-found";

export const RouterProvider: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signin" element={<Entry />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
