import { CounterContainer } from "../counter/counter.container";
import { ReviewForm } from "./review-form/review-form.component";
import { Title } from "../title/title.component";
import { useUser } from "../context/user.context";

const maxMenuItemCount = 5;
const minMenuItemCount = 0;

export const RestaurantCard = ({ item }) => {
  const { value: userName } = useUser();

  if (!isValidRestaurantGuard(item)) return null;

  return (
    <div className="restaurant-card" key={item.id}>
      <Title name="Restaurants" />
      <div className="restaurant-card__name">
        <h1>{item.name}</h1>
      </div>
      <div className="restaurant-card__menu">
        <h3>Menu</h3>
        <ul className="restaurant-card__menu-list">
          {item.menu.map((menuItem) => (
            <li key={menuItem.id} className="menu-item">
              <div className="menu-item__label">{menuItem.name}</div>
              {userName !== "anonimus" ? (
                <CounterContainer
                  min={minMenuItemCount}
                  max={maxMenuItemCount}
                />
              ) : undefined}
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
        <ReviewForm />
      </div>
    </div>
  );
};

const isValidRestaurantGuard = (item) => {
  if (
    !item ||
    !item.id ||
    !item.name ||
    !item.menu ||
    !item.menu.length ||
    !item.reviews ||
    !item.reviews.length
  ) {
    return false;
  }

  return true;
};
