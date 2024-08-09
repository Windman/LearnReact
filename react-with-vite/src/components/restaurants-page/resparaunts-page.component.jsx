import { Outlet } from "react-router-dom";
import { RestaurantsList } from "../restaurants-list/restaurants-list.component";

export const RestaurantrsPage = () => {
  return (
    <div>
      <RestaurantsList />
      <Outlet/>
    </div>
  );
};

