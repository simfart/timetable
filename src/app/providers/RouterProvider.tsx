import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/home";
import { EntryPage } from "pages/auth";
import { Schedule } from "pages/schedule";
import { PageNotFound } from "pages/page-not-found";
import { ProtectedRoute } from "./ProtectedRoute";

export const RouterProvider: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<EntryPage />} />
      <Route
        path="/schedule"
        element={
          <ProtectedRoute>
            <Schedule />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
