import {
    BellRing,
    BookOpen,
    CalendarRange,
    Compass,
    Shield,
    Sparkles,
    Trophy,
    Users,
    Zap,
} from 'lucide-react';

export const publicLinks = [
    { name: 'About', path: '/about' },
    { name: 'Opportunities', path: '/features' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
];

export const featureSections = [
    {
        title: 'Matching & Discovery',
        items: [
            {
                name: 'AI-Powered Matching',
                description: 'Personalized matches across clubs, internships, and research.',
                path: '/features/ai-powered-matching',
                icon: Sparkles,
            },
            {
                name: 'Discover Opportunities',
                description: 'Search competitions, scholarships, and programs.',
                path: '/features/discover-opportunities',
                icon: Compass,
            },
            {
                name: 'Personalized Recommendations',
                description: 'Suggestions tuned to your interests and goals.',
                path: '/features/personalized-recommendations',
                icon: Users,
            },
        ],
    },
    {
        title: 'Applications & Tracking',
        items: [
            {
                name: 'Instant Applications',
                description: 'Reuse your profile to apply faster with fewer clicks.',
                path: '/features/instant-applications',
                icon: Zap,
            },
            {
                name: 'Smart Deadline Tracker',
                description: 'Get reminders before key due dates.',
                path: '/features/smart-deadline-tracker',
                icon: CalendarRange,
            },
            {
                name: 'Real-Time Notifications',
                description: 'Stay updated on saved opportunities.',
                path: '/features/real-time-notifications',
                icon: BellRing,
            },
        ],
    },
    {
        title: 'Community & Growth',
        items: [
            {
                name: 'Connect with Students',
                description: 'Team up with peers for projects and competitions.',
                path: '/features/connect-with-students',
                icon: Users,
            },
            {
                name: 'Track Achievements',
                description: 'Showcase milestones, wins, and certifications.',
                path: '/features/track-achievements',
                icon: Trophy,
            },
            {
                name: 'Career Growth',
                description: 'Prep for internships with curated pathways.',
                path: '/features/career-growth',
                icon: Shield,
            },
        ],
    },
    {
        title: 'Explore',
        items: [
            {
                name: 'Opportunities Hub',
                description: 'Browse every opportunity in one view.',
                path: '/features',
                icon: Compass,
            },
            {
                name: 'About Networkly',
                description: 'Learn about our mission and story.',
                path: '/about',
                icon: BookOpen,
            },
            {
                name: 'Meet the Team',
                description: 'Discover the people behind Networkly.',
                path: '/team',
                icon: Users,
            },
        ],
    },
];
