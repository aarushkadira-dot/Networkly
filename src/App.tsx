import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ToastProvider } from './components/SuccessToast';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { OnboardingModal } from './components/OnboardingModal';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ProtectedRoute } from './components/ProtectedRoute';
import { ErrorBoundary } from './components/ErrorBoundary';
import { supabase } from './lib/supabase';

// Lazy load all pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Features = lazy(() => import('./pages/Features'));
const AllFeatures = lazy(() => import('./pages/AllFeatures'));
const Team = lazy(() => import('./pages/Team'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Students = lazy(() => import('./pages/Students'));
const Profile = lazy(() => import('./pages/Profile'));
const Admin = lazy(() => import('./pages/Admin'));
const Notifications = lazy(() => import('./pages/Notifications'));
const AuthCallback = lazy(() => import('./pages/AuthCallback'));

// Lazy load feature detail pages
const AIPoweredMatching = lazy(() => import('./pages/features/AIPoweredMatching'));
const DiscoverOpportunities = lazy(() => import('./pages/features/DiscoverOpportunities'));
const SmartDeadlineTracker = lazy(() => import('./pages/features/SmartDeadlineTracker'));
const ConnectWithStudents = lazy(() => import('./pages/features/ConnectWithStudents'));
const RealTimeNotifications = lazy(() => import('./pages/features/RealTimeNotifications'));
const PersonalizedRecommendations = lazy(() => import('./pages/features/PersonalizedRecommendations'));
const TrackAchievements = lazy(() => import('./pages/features/TrackAchievements'));
const ResearchOpportunities = lazy(() => import('./pages/features/ResearchOpportunities'));
const InternshipMatching = lazy(() => import('./pages/features/InternshipMatching'));
const InstantApplications = lazy(() => import('./pages/features/InstantApplications'));
const FreeForever = lazy(() => import('./pages/features/FreeForever'));
const CareerGrowth = lazy(() => import('./pages/features/CareerGrowth'));

// ScrollToTop component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const { user, loading } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [checkingOnboarding, setCheckingOnboarding] = useState(true);

  useEffect(() => {
    const checkOnboarding = async () => {
      if (!user) {
        setCheckingOnboarding(false);
        return;
      }

      try {
        const { data } = await supabase
          .from('profiles')
          .select('onboarding_completed')
          .eq('id', user.id)
          .maybeSingle();

        if (!data || !data.onboarding_completed) {
          setOnboardingOpen(true);
        }
      } catch (error) {
        console.error('Error checking onboarding:', error);
      } finally {
        setCheckingOnboarding(false);
      }
    };

    if (!loading) {
      checkOnboarding();
    }
  }, [user, loading]);

  const handleOnboardingComplete = () => {
    setOnboardingOpen(false);
  };

  if (checkingOnboarding) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Navbar onAuthClick={() => setAuthModalOpen(true)} />
          <Suspense fallback={
            <div className="flex min-h-screen items-center justify-center">
              <LoadingSpinner />
            </div>
          }>
          <Routes>
            <Route path="/" element={<Home onAuthClick={() => setAuthModalOpen(true)} />} />
            <Route path="/about" element={<About onAuthClick={() => setAuthModalOpen(true)} />} />
            <Route path="/features" element={<Features onAuthClick={() => setAuthModalOpen(true)} />} />
            <Route path="/all-features" element={<AllFeatures onAuthClick={() => setAuthModalOpen(true)} />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
              <Route path="/students" element={<Students />} />
              <Route path="/auth/callback" element={<AuthCallback />} />
              
              {/* Feature detail pages */}
              <Route path="/features/ai-powered-matching" element={<AIPoweredMatching />} />
              <Route path="/features/discover-opportunities" element={<DiscoverOpportunities />} />
              <Route path="/features/smart-deadline-tracker" element={<SmartDeadlineTracker />} />
              <Route path="/features/connect-with-students" element={<ConnectWithStudents />} />
              <Route path="/features/real-time-notifications" element={<RealTimeNotifications />} />
              <Route path="/features/personalized-recommendations" element={<PersonalizedRecommendations />} />
              <Route path="/features/track-achievements" element={<TrackAchievements />} />
              <Route path="/features/research-opportunities" element={<ResearchOpportunities />} />
              <Route path="/features/internship-matching" element={<InternshipMatching />} />
              <Route path="/features/instant-applications" element={<InstantApplications />} />
              <Route path="/features/free-forever" element={<FreeForever />} />
              <Route path="/features/career-growth" element={<CareerGrowth />} />
              
              <Route
                path="/profile"
                element={
                  <ProtectedRoute onAuthRequired={() => setAuthModalOpen(true)}>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute requireAdmin onAuthRequired={() => setAuthModalOpen(true)}>
                    <Admin />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/notifications"
                element={
                  <ProtectedRoute onAuthRequired={() => setAuthModalOpen(true)}>
                    <Notifications />
                  </ProtectedRoute>
                }
              />
          </Routes>
          </Suspense>
            <Footer />
          <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
          <OnboardingModal isOpen={onboardingOpen} onComplete={handleOnboardingComplete} />
        </div>
      </Router>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ToastProvider>
          <AppContent />
        </ToastProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
