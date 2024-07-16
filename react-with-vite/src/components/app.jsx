import { restaurants } from "../materials/mocks";
import { Layout } from "./layout/layout.component";
import { Title } from "./title/title.component";
import { RestaurantCard } from "./restaurant-card/restaurant-card.component";
import { Navigation } from "./navigation/natigation.component";
import { useState } from "react";

export const App = () => {
  const [value, setValue] = useState(restaurants.length ? restaurants[0] : undefined);
  
  const handleRestaurantSelection = (index) => {
    setValue(restaurants[index]);
  }

  return (
    <div>
      <Layout>
        <Title name="Restaurants" />
        <Navigation items={restaurants} onSelect={handleRestaurantSelection}/>
        <RestaurantCard item={value} />
      </Layout>
    </div>
  );
};
