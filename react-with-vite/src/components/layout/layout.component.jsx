import { Footer } from "../footer/footer.component";
import { Header } from "../header/header.component";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
    children: "" // TODO How to deal with it? 
  }