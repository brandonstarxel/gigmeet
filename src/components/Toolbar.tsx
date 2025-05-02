import { Link } from 'react-router-dom';
import { Home, User, MessageSquare, Heart } from 'lucide-react';

const Toolbar = ({ hasNewNotifications }: { hasNewNotifications: boolean }) => {
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

          {/* Chat with badge */}
          <Link
            to="/chat"
            className="relative flex flex-col items-center hover:text-gray-300"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="text-sm">Chat</span>

            {hasNewNotifications && (
              <span
                className="
                  absolute 
                  -top-1 
                  right-0 
                  inline-flex 
                  items-center 
                  justify-center 
                  px-1.5 
                  py-0.5 
                  text-xs 
                  font-bold 
                  leading-none 
                  text-white 
                  bg-blue-500 
                  rounded-full 
                  animate-bounce
                "
              >
                1
              </span>
            )}
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
