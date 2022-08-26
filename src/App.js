// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import SecondPage from './secondPage/main';
import Third from "./thirdpage/main";
import LandingPage from './firstPage/firstPage';
import Login from "./auth/main";
// import Interlude from "./auth/interlude";
import Receipt from "./success/main";
import Invoice from "./receipt/receipt";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="details/" element={<SecondPage />} />
        <Route path="payment/" element={<Third />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/:username/:password" element={<Interlude />} /> */}
        <Route path="/checkout" element={<Receipt />} />
        <Route path="/receipt" element={<Invoice />} />
      </Routes>
      
    </>
  );
}

export default App;
