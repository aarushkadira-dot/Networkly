import { Mail, Linkedin, Code, Coffee, Rocket, Heart, Quote, Target, Users, Zap, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Card } from '../components/Card';
import { fadeInUp, staggerContainer } from '../lib/animations';
import { Link } from 'react-router-dom';

function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const team = [
    {
      name: 'Saatvik Santosh',
      role: 'Co-Founder & Developer',
      email: 'saatviksantosh10@gmail.com',
      bio: 'Passionate about building tools that genuinely help students succeed. When not coding, probably exploring opportunities and discovering new tech.',
      quote: "Every feature we build should solve a real problem we've faced ourselves.",
      funFacts: ['☕ Coffee enthusiast', '🎮 Gamer', '📚 Always learning'],
      color: 'from-electric-blue to-soft-teal'
    },
    {
      name: 'Aarush Kadira',
      role: 'Co-Founder & Developer',
      email: 'aarush.kadira@gmail.com',
      bio: 'Student developer on a mission to democratize opportunity discovery. Big believer that student-led innovation creates the best solutions.',
      quote: 'If we can make opportunity discovery easier for even one student, it\'s worth it.',
      funFacts: ['🚀 Space geek', '🎵 Music lover', '🏀 Basketball fan'],
      color: 'from-purple-500 to-pink-500'
    },
  ];

  return (
    <div className="min-h-screen bg-dark-navy pt-24 text-white relative overflow-hidden">
      <div className="flex items-center justify-center h-screen">
        <p className="text-white/70">Team page coming soon...</p>
      </div>
      {/* Commented out team content */}
    </div>
  );
}

export default Team;
