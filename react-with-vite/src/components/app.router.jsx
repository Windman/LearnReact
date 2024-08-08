import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/layout.component";
import { RestaurantrsPage } from "./restaurants-page/resparaunts-page.component";
import { RestaurantPage } from "./restaurant-page/restaurant-page.component";
import { RestaurantMenuPage } from "./restaurant-page/menu-page/menu-page.component";
import { RestaurantReviewPage } from "./restaurant-page/review-page/review-page.component";

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
              children: [
                {
                  path: "menu",
                  element: <RestaurantMenuPage />,
                },
                {
                  path: "review",
                  element: <RestaurantReviewPage />,
                },
              ]
            },
          ],
        },
      ],
      errorElement: <div>Page is not Found</div>,
    },
  ]);