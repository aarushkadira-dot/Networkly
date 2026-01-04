import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, ArrowLeft, MessageCircle, UserPlus, Network } from 'lucide-react';

export default function ConnectWithStudents() {
  return (
    <div className="min-h-screen bg-dark-navy text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/all-features" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Features
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Connect with Students</h1>
          </div>

          <p className="text-xl text-neutral-300 mb-12">
            Build your network by connecting with like-minded students and sharing experiences
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Build Your Network</h2>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Success in high school isn't just about what you know, it's also about who you know. 
                  Networkly's student network connects you with peers who share your interests, goals, and 
                  aspirations.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  Collaborate on projects, share application tips, exchange advice about programs you've 
                  attended, and build meaningful relationships that extend beyond high school.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Networking Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <UserPlus className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
                  <p className="text-neutral-300 text-sm">
                    Connect with students who share your academic interests and career goals.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <MessageCircle className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Direct Messaging</h3>
                  <p className="text-neutral-300 text-sm">
                    Chat with other students, ask questions, and share experiences.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Network className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Collaboration Tools</h3>
                  <p className="text-neutral-300 text-sm">
                    Work together on projects, form study groups, and collaborate on applications.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Users className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Community Forums</h3>
                  <p className="text-neutral-300 text-sm">
                    Participate in discussions, share advice, and learn from others' experiences.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


