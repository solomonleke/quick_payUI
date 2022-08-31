// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import VendorWallet from "./pages/Vendor wallet/main";
import AccountPage from "./pages/Account page/account";
import LandingPage from "./pages/Landing page/landing";
import Login from "./auth/main";
import Receipt from "./success/main";
import Invoice from "./receipt/receipt";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/details" element={<AccountPage />} />
        <Route path="/vendor" element={<VendorWallet />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/:username/:password" element={<Interlude />} /> */}
        <Route path="/checkout" element={<Receipt />} />
        <Route path="/receipt" element={<Invoice />} />
      </Routes>
      
    </>
  );
}

export default App;
