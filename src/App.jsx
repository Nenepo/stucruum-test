import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Booking from './pages/Booking';
import ATMCreativity from './pages/ATMCreativity';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Booking />} />
        <Route path="/atm" element={<ATMCreativity />} />
      </Routes>
    </Router>
  );
}

export default App;
