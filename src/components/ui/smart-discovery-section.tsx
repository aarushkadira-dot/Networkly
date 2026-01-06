import { FeatureGrid } from './modern-feature-grid';
import { Sparkles, Clock, Zap, GraduationCap, Trophy, Users } from 'lucide-react';

export function SmartDiscoverySection() {
    const features = [
        {
            Icon: Sparkles,
            title: "AI-Powered Matching",
            description: "Get personalized recommendations that match your interests, grade level, and goals. Access opportunities most students never find—scholarships, research programs, and competitions all surfaced just for you."
        },
        {
            Icon: Clock,
            title: "Time Management",
            description: "Never Miss a Deadline. Automatic reminders and deadline tracking keep you ahead. Focus on applications, not calendar management."
        },
        {
            Icon: Zap,
            title: "Save Time",
            description: "Instant Applications. Apply to multiple opportunities in seconds with your saved profile. No more repetitive forms."
        },
        {
            Icon: GraduationCap,
            title: "Academic Excellence",
            description: "Research Opportunities. Connect with research programs, labs, and mentors. Search by your project name or major to find relevant research professors. Find undergraduate research positions, summer programs, and academic collaborations that align with your interests."
        },
        {
            Icon: Trophy,
            title: "Get Noticed",
            description: "College Visibility & Admissions. Colleges see you before you even apply. Your verified profile is searchable by admissions officers, with your achievements and impact showing up when they search for you."
        },
        {
            Icon: Users,
            title: "Community",
            description: "Connect with Peers. Find students with similar interests. Build connections, share experiences, and grow together."
        }
    ];

    /*
    return (
      <FeatureGrid
        sectionTitle="Smart Discovery"
        sectionDescription="Unlock your full potential with intelligent tools designed to connect you with the right opportunities at the right time."
        features={features}
        className="bg-transparent"
      />
    );
    */

    return (
        <div className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Smart Discovery</h2>
                <p className="text-white/70">Loading visualization...</p>
            </div>
        </div>
    );
}
