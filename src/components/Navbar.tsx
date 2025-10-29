import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface NavbarProps {
  onAuthClick: () => void;
}

export function Navbar({ onAuthClick }: NavbarProps) {
  const { user, signOut, isAdmin } = useAuth();
  const location = useLocation();

  const publicLinks = [
    { name: 'Home', path: '/' },
    { name: 'Opportunities', path: '/opportunities' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md transition-all duration-300 font-open-sans">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center">
        {/* Center: Links */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          {publicLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive(link.path)
                  ? 'bg-cyan-500 text-white font-semibold shadow-lg'
                  : 'hover:text-cyan-300 hover:bg-white/10'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Buttons */}
        <div className="flex space-x-4 absolute right-4">
          {user ? (
            <>
              {isAdmin && (
                <Link to="/admin">
                  <button className="text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
                    Admin
                  </button>
                </Link>
              )}
              <Link to="/profile">
                <button className="text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
                  Profile
                </button>
              </Link>
              <button 
                onClick={signOut}
                className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => window.location.href = '/students'}
                className="bg-gradient-to-r from-royal-blue to-bright-teal text-white px-4 py-2 rounded-lg font-semibold hover:opacity-95 transition-colors"
              >
                Connect with Students
              </button>
              <button 
                onClick={onAuthClick}
                className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}