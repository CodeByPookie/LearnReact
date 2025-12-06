import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import BasicsPage from './Pages/BasicsPage';
import PropsPage from './Pages/PropsPage';
import StatePage from './Pages/StatePage';
import EventPage from './Pages/EventPage';
import Parent from './Components/Task/Method as Props/Parent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basics" element={<BasicsPage />} />
        <Route path="/props" element={<PropsPage />} />
        <Route path="/state" element={<StatePage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/method-as-prop" element={<Parent />} />
      </Routes>
    </Router>
  );
}

export default App;
