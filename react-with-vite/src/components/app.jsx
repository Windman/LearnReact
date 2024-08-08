
import { ProgressBar } from "./progress/bar/progress-bar.component";
import { ThemeContextProvider } from "./context/theme.context";
import { UserContextProvider } from "./context/user.context";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./app.router";

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <ProgressBar />
        <UserContextProvider>
          <ThemeContextProvider>
            <RouterProvider router={router} />
          </ThemeContextProvider>
        </UserContextProvider>
      </div>
    </Provider>
  );
};
