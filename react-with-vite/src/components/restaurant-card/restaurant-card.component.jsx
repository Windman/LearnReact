import { CounterContainer } from "../counter/counter.container";

const maxMenuItemCount = 5;
const minMenuItemCount = 0;

export const RestaurantCard = ({ item }) => {
  if (!isValidRestaurantGuard(item)) return null;

  return (
    <div className="restaurant-card" key={item.id}>
      <div className="restaurant-card__name">
        <h1>{item.name}</h1>
      </div>
      <div className="restaurant-card__menu">
        <h3>Menu</h3>
        <ul className="restaurant-card__menu-list">
          {item.menu.map((menuItem) => (
            <li key={menuItem.id} className="menu-item">
              <div className="menu-item__label">{menuItem.name}</div>
              <CounterContainer min={minMenuItemCount} max={maxMenuItemCount} />
            </li>
          ))}
        </ul>
      </div>
      <div className="restaurant-card__reviews">
        <h3>Reviews</h3>
        <ul className="restaurant-card__review-list">
          {item.reviews.map((reviewItem) => (
            <li key={reviewItem.id}>{reviewItem.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};


const isValidRestaurantGuard = (item) =>{
    if (!item || !item.id || !item.name || !item.menu || !item.menu.length || !item.reviews || !item.reviews.length) {
        return false;
    }

    return true;
}