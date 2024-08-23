import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//import { selectDishById } from "../../redux/entities/dishes";
import { Order } from "../order/order.component";
import { selectDishById } from "../../redux/entities/dishes";
import { useRequest } from "../../hooks/use-request";
import { getDish } from "../../redux/entities/dishes/get-dish";

export const DishPage = () => {
  const { dishId } = useParams();
  const dish = useSelector((state) => selectDishById(state, dishId));

  const requestStatus = useRequest(getDish, dishId);

  if (requestStatus === "pending") {
    return <div>...loading</div>;
  }

  if (requestStatus === "rejected") {
    return <div>menu error</div>;
  }

  if (!dish) return null;
  
  return (
    <div>
      <div>{dish.name}</div>
      <div className="counter">
        <Order id={dishId} />
      </div>
    </div>
  );
};
