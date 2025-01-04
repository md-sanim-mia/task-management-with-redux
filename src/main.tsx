import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./Redux/store.ts";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Route.tsx";
import { ThemeProvider } from "./Providers/ThemProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      {" "}
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>{" "}
    </ThemeProvider>
  </StrictMode>
);
