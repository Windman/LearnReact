import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { getRestaurant } from "../../redux/entities/restaurants/get-restaurant";
import { useRequest } from "../../hooks/use-request";
import { selectRestaurantById } from "../../redux/entities/restaurants";
import { useSelector } from "react-redux";
import { RestaurantCard } from "../restaurant-card/restaurant-card.component";

export const RestaurantPage = () => {
  const { restId } = useParams();
  const rest = useSelector(selectRestaurantById);

  const requestStatus = useRequest(getRestaurant, restId);

  if (requestStatus === "pending") {
    return <div>...loading</div>;
  }

  if (requestStatus === "rejected") {
    return <div>error</div>;
  }

  return (
    <>
      <RestaurantCard id={restId}/>
      <div>
        <NavLink to={"menu"}>Menu</NavLink>
      </div>
      <div>
        <NavLink to={"review"}>Review</NavLink>
      </div>

      <Outlet />
    </>
  );
};
