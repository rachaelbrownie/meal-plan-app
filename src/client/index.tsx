import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./error";
import { Account, action as accountAction } from "./routes/account";
import { Fridge } from "./routes/fridge";
import { Home } from "./routes/home";
import { New, action as newAction } from "./routes/new";
import { Root, loader as rootLoader } from "./routes/root";
import { Saved } from "./routes/saved";
import Signup, {
  action as SignupAction,
  loader as SignupLoader,
} from "./routes/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
    errorElement: <ErrorPage />,
    loader: SignupLoader,
    action: SignupAction,
  },
  {
    path: "/grocery",
    element: <Root />,
    id: "root",
    loader: rootLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "new",
        element: <New />,
        action: newAction,
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
        action: accountAction,
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
