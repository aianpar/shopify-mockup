import { BrowserRouter, Route, Routes } from "react-router-dom";
import Orders from "/src/page/Orders/Orders.jsx"
import Updated from "./page/Updated/Updated";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Orders/>}></Route>
          <Route path="/details"></Route>
          <Route path="/manage"></Route>
          <Route path="/updated" element={<Updated/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
