import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ATMCreativity from './pages/ATMCreativity';
import BookEventModal from './components/BookEventModal';
import Signup from './components/mobile/Signup';
import Upload from './components/mobile/Upload';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<BookEventModal />} />
        <Route path="/atm" element={<ATMCreativity />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/upload' element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;
