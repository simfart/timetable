import { FC } from "react";
import { RouterProvider } from "./providers";
import { QueryClientProvider } from "./providers/QueryClientProvider";
import { BrowserRouter } from "react-router-dom";
import { ReduxToolkitProvider } from "./providers/ReduxToolkitProvider";

import "./App.scss";

export const App: FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <QueryClientProvider>
          <ReduxToolkitProvider>
            <RouterProvider />
          </ReduxToolkitProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};
