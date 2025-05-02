import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import JobDescription from './pages/JobDescription';
import Chat from './pages/Chat';
import Match from './pages/Match';
import Toolbar from './components/Toolbar';
import { useState } from 'react';
import Map from './pages/Map';

function App() {
    const [hasNewNotifications, setHasNewNotifications] = useState(false);
    
  return (
    <Router>
      <div className="h-screen flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onNewNotification={() => setHasNewNotifications(true)} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/job-description" element={<JobDescription />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/match" element={<Match />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </main>
        <Toolbar hasNewNotifications={hasNewNotifications} />
      </div>
    </Router>
  );
}

export default App;
