import { useParams } from "react-router-dom";
import { RestaurantCard } from "../restaurant-card/restaurant-card.component";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const RestaurantPage = () => {
  const { restId } = useParams();

  return (
    <>
      <div>
        <NavLink to={"menu"}>Menu</NavLink>
      </div>
      <div>
        <NavLink to={"review"}>Review</NavLink>
      </div>

      <RestaurantCard id={restId ?? 0} />
      <Outlet />
    </>
  );
};
