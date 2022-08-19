// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import SecondPage from './secondPage/main';
import LandingPage from './firstPage/firstPage';

function App() {
  const number='';
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="details/:number" element={<SecondPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
