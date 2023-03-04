import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { OrderSummary } from "./components/OrderSummary";

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
      </Routes>
    </>
  );
}

export default App;
