import { Cart } from "../cart/cart.component";
import { Footer } from "../footer/footer.component";
import { Header } from "../header/header.component";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Cart></Cart>
      <Footer />
    </div>
  );
};
