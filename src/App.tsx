import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import JobDescription from './pages/JobDescription';
import Chat from './pages/Chat';
import Match from './pages/Match';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/job-description" element={<JobDescription />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/match" element={<Match />} />
      </Routes>
    </Router>
  );
}

export default App;
