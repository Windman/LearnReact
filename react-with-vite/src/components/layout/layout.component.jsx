import { Outlet } from "react-router-dom";
import { Cart } from "../cart/cart.component";
import { Footer } from "../footer/footer.component";
import { Header } from "../header/header.component";
import { useUser } from "../context/user.context";

export const Layout = () => {
  const { value: user } = useUser();

  return (
    <div>
      <Header />
      <Outlet />
      {user.isAuthorized ? <Cart /> : undefined}
      <Footer />
    </div>
  );
};
