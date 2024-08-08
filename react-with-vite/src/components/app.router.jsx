import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/layout.component";
import { RestaurantrsPage } from "./restaurants-page/resparaunts-page.component";
import { RestaurantPage } from "./restaurant-page/restaurant-page.component";

export const router = createBrowserRouter([
    {
      path: "/home",
      element: <div>This is a Restaraunts Home Page</div>,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/restaurants",
          element: <RestaurantrsPage />,
          children: [
            {
              path: ":restId",
              element: <RestaurantPage />,
            },
          ],
        },
      ],
      errorElement: <div>Page is not Found</div>,
    },
  ]);