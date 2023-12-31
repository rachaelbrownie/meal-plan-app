import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root";
import { New } from "./routes/new";
import { Fridge } from "./routes/fridge";
import { Saved } from "./routes/saved";
import { Account } from "./routes/account";
import { ErrorPage } from "./error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "new",
        element: <New />,
        errorElement: <ErrorPage />,
      },
      {
        path: "fridge",
        element: <Fridge />,
        errorElement: <ErrorPage />,
      },
      {
        path: "saved",
        element: <Saved />,
        errorElement: <ErrorPage />,
      },
      {
        path: "account",
        element: <Account />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
