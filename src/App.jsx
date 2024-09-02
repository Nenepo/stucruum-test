import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ATMCreativity from './pages/ATMCreativity';
import BookEventModal from './components/BookEventModal';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<BookEventModal />} />
        <Route path="/atm" element={<ATMCreativity />} />
      </Routes>
    </Router>
  );
}

export default App;
