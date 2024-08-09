import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectDishById } from "../../redux/entities/dishes";
import { Order } from "../order/order.component";

export const DishPage = () => {
  const { dishId } = useParams();
  const dish = useSelector((state) => selectDishById(state, dishId));
  return (
    <div>
      <div>{dish.name}</div>
      <div className="counter">
        <Order id={dishId} />
      </div>
    </div>
  );
};
