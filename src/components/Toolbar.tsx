import { Link } from 'react-router-dom';
import { Home, User, Briefcase, MessageSquare, Heart } from 'lucide-react';

const Toolbar = () => {
  return (
    <nav className="bg-primary text-white fixed bottom-0 w-full drop-shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-around items-center py-3">
          <Link to="/" className="flex flex-col items-center hover:text-gray-300">
            <Home className="w-5 h-5" />
            <span className="text-sm">Home</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center hover:text-gray-300">
            <User className="w-5 h-5" />
            <span className="text-sm">Profile</span>
          </Link>
          <Link to="/job-description" className="flex flex-col items-center hover:text-gray-300">
            <Briefcase className="w-5 h-5" />
            <span className="text-sm">Jobs</span>
          </Link>
          <Link to="/chat" className="flex flex-col items-center hover:text-gray-300">
            <MessageSquare className="w-5 h-5" />
            <span className="text-sm">Chat</span>
          </Link>
          <Link to="/match" className="flex flex-col items-center hover:text-gray-300">
            <Heart className="w-5 h-5" />
            <span className="text-sm">Matches</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar; 