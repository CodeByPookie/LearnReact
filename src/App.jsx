import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BasicsPage from './Pages/BasicsPage';
import PropsPage from './Pages/PropsPage';
import StatePage from './Pages/StatePage';
import EventPage from './Pages/EventPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basics" element={<BasicsPage />} />
        <Route path="/props" element={<PropsPage />} />
        <Route path="/state" element={<StatePage />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
    </Router>
  );
}

export default App;
