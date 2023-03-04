import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import { Admin } from "./components/Admin";
import { FeaturedProducts } from "./components/FeaturedProducts";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { NewProducts } from "./components/NewProducts";
import { NoMatch } from "./components/NoMatch";
import { OrderSummary } from "./components/OrderSummary";
import { Products } from "./components/Products";
import { UserDetails } from "./components/UserDetails";
import { Users } from "./components/Users";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route
          path="order-summary"
          element={<OrderSummary></OrderSummary>}
        ></Route>
        <Route path="*" element={<NoMatch></NoMatch>}></Route>
        <Route path="products" element={<Products></Products>}>
          <Route index element={<FeaturedProducts></FeaturedProducts>}></Route>
          <Route
            path="featured"
            element={<FeaturedProducts></FeaturedProducts>}
          ></Route>
          <Route path="new" element={<NewProducts></NewProducts>}></Route>
        </Route>
        <Route path="users" element={<Users></Users>}>
          <Route path=":userId" element={<UserDetails></UserDetails>}></Route>
          <Route path="admin" element={<Admin></Admin>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
