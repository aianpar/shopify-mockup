import { BrowserRouter, Route, Routes } from "react-router-dom";
import Orders from "/src/page/Orders/Orders.jsx"
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Orders/>}></Route>
          <Route path="/edit"></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
