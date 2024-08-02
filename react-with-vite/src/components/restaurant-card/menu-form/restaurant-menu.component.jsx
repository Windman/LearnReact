import { CounterContainer } from "../../counter/counter.container";
import { useUser } from "../../context/user.context";

import { useSelector } from "react-redux";
import { selectMenuById } from "../../../redux/entities/menu/index";

const maxMenuItemCount = 5;
const minMenuItemCount = 0;

export const RestaurantMenu = ({ menuIds }) => {
  const { value: user } = useUser();
  const menu = useSelector((state) => {
    return menuIds.map((id) => selectMenuById(state, id));
  });

  return (
    <div className="restaurant-card__menu">
      <h3>Menu</h3>
      <ul className="restaurant-card__menu-list">
        {menu.map((menuItem) => (
          <li key={menuItem.id} className="menu-item">
            <div className="menu-item__label">{menuItem.name}</div>
            {user.isAuthorized ? (
              <CounterContainer min={minMenuItemCount} max={maxMenuItemCount} />
            ) : undefined}
          </li>
        ))}
      </ul>
    </div>
  );
};
