// import logo from './logo.svg';
// import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import SecondPage from './secondPage/main';
import LandingPage from './firstPage/firstPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="details" element={<SecondPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
