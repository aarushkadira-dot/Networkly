import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '../components/common/LoadingSpinner';

function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/', { replace: true });
    }, 1200);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-dark-navy flex items-center justify-center px-6">
      <div className="text-center space-y-4 text-white">
        <LoadingSpinner size="lg" message="Finishing secure sign-in..." />
        <p className="text-white/70 text-sm">
          Hang tight, your session is being secured and you'll be redirected momentarily.
        </p>
      </div>
    </div>
  );
}

export default AuthCallback;



