import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { getRestaurant } from "../../redux/entities/restaurant/get-restaurant";
import { useRequest } from "../../hooks/use-request";
import { selectRestaurantById } from "../../redux/entities/restaurant";
import { useSelector } from "react-redux";

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
