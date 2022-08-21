// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import SecondPage from './secondPage/main';
import Third from "./thirdpage/main";
import LandingPage from './firstPage/firstPage';
import Login from "./auth/main";
import Interlude from "./auth/interlude";
import Receipt from "./success/main";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="details/:number" element={<SecondPage />} />
        <Route path="details/:number/:amount/pay" element={<Third />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/:username/:password" element={<Interlude />} />
        <Route path="/checkout" element={<Receipt />} />
      </Routes>
      
    </div>
  );
}

export default App;
