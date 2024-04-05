import { BrowserRouter, Route, Routes } from "react-router-dom";
import Orders from "/src/page/Orders/Orders.jsx"
import Updated from "./page/Updated/Updated";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import EditOrder from "./page/EditOrder/EditOrder";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Orders/>}></Route>
          <Route path="/details"></Route>
          <Route path="/manage" element={<EditOrder/>} ></Route>
          <Route path="/updated" element={<Updated/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
