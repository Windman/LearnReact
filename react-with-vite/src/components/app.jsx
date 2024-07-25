import { restaurants } from "../materials/mocks";
import { Layout } from "./layout/layout.component";
import { RestaurantCard } from "./restaurant-card/restaurant-card.component";
import { Navigation } from "./navigation/natigation.component";
import { useState } from "react";
import { ProgressBar } from "./progress/bar/progress-bar.component";
import { ThemeContextProvider } from "./context/theme.context";
import { UserContextProvider } from "./context/user.context";

export const App = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(
    restaurants.length ? restaurants[0] : undefined
  );

  const handleRestaurantSelection = (index) => {
    setActiveRestaurant(restaurants[index]);
  };

  return (
    <div>
      <ProgressBar />
      <UserContextProvider>
        <ThemeContextProvider>
          <Layout>
            <Navigation
              items={restaurants}
              onSelect={handleRestaurantSelection}
            />
            <RestaurantCard item={activeRestaurant} />
          </Layout>
        </ThemeContextProvider>
      </UserContextProvider>
    </div>
  );
};
