import { BrowserRouter, Route, Routes } from "react-router-dom";
import Orders from "/src/page/Orders/Orders.jsx"
import Updated from "./page/Updated/Updated";
import Footer from "./components/Footer/Footer";
import EditOrder from "./page/EditOrders/EditOrder"
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Orders/>}></Route>
          <Route path="/details"></Route>
          <Route path="/edit" element={<EditOrder/>}></Route>
          <Route path="/updated" element={<Updated/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
