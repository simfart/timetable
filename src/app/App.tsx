import { FC, useState } from "react";
import { RouterProvider } from "./providers";
import { QueryClientProvider } from "./providers/QueryClientProvider";
import { BrowserRouter } from "react-router-dom";
import { ReduxToolkitProvider } from "./providers/ReduxToolkitProvider";
import { AuthContext } from "./context/AuthContext";
import { UserType } from "shared/types";

import "./App.scss";

export const App: FC = () => {
  const [user, setUser] = useState<UserType | null>(null);
  return (
    <div className="app">
      <BrowserRouter>
        <AuthContext.Provider value={{ user, setUser }}>
          <QueryClientProvider>
            <ReduxToolkitProvider>
              <RouterProvider />
            </ReduxToolkitProvider>
          </QueryClientProvider>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
};
