import { restaurants } from "../materials/mocks";
import { Layout } from "./layout/layout.component";
import { Title } from "./title/title.component";
import { RestaurantCard } from "./restaurant-card/restaurant-card.component";

export const App = () => {
  return (
    <div>
      <Layout>
        <Title name="Restaurants" />
        {restaurants.map((restaurant) => (
          <RestaurantCard item={restaurant} />
        ))}
      </Layout>
    </div>
  );
};
