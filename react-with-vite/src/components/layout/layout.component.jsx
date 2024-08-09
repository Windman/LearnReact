import { Outlet } from "react-router-dom";
import { Cart } from "../cart/cart.component";
import { Footer } from "../footer/footer.component";
import { Header } from "../header/header.component";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Cart />
      <Footer />
    </div>
  );
};
