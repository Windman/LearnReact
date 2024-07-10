import ReactDOM from "react-dom/client";
import { restaurants } from "./materials/mocks";

const rootElment = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(rootElment);

reactRoot.render(restaurants.map((item) => (
  <div className="restaurant-card" key={item.id}>
    <div className="restaurant-card__name">
      <h1>{item.name}</h1>
    </div>
    <div className="restaurant-card__menu">
      <h3>Menu</h3>
      <ul className="restaurant-card__menu-list">
        {item.menu.map((menuItem) => (
          <li key={menuItem.id}>{menuItem.name}</li>
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
)));


