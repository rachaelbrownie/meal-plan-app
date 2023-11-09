import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root";
import { Page } from "./routes/page";
import { ErrorPage } from "./error";
import {
  ThemeModeProvider,
  lightTheme,
  darkTheme,
  ThemeProvider,
  modes,
  useThemeMode,
} from "@mirantis/mds-theme";

const Theme = ({ children }: { children: React.ReactNode }) => {
  const { themeMode } = useThemeMode();
  const theme = themeMode === modes.LIGHT ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme} themeMode={themeMode} withFonts={null}>
      {children}
    </ThemeProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "page/:pageId",
        element: <Page />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <Theme>
        <RouterProvider router={router} />
      </Theme>
    </ThemeModeProvider>
  </React.StrictMode>,
);
