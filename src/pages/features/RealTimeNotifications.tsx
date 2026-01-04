import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bell, ArrowLeft, Smartphone, Zap, Filter } from 'lucide-react';

export default function RealTimeNotifications() {
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
              <Bell className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Real-Time Notifications</h1>
          </div>

          <p className="text-xl text-neutral-300 mb-12">
            Stay ahead with instant alerts for new opportunities and approaching deadlines
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Never Miss a Beat</h2>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-neutral-300 leading-relaxed">
                  In the competitive world of scholarships and opportunities, timing is everything. 
                  Networkly's real-time notification system ensures you're always the first to know about 
                  new opportunities, deadline changes, application status updates, and more, all delivered 
                  instantly to your device.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Notification Types</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Zap className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">New Matches</h3>
                  <p className="text-neutral-300 text-sm">
                    Get instant alerts when new opportunities matching your profile are added.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Bell className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Deadline Reminders</h3>
                  <p className="text-neutral-300 text-sm">
                    Timely reminders for upcoming deadlines so you never miss a submission date.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Smartphone className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Multi-Device Support</h3>
                  <p className="text-neutral-300 text-sm">
                    Receive notifications on all your devices, including phone, tablet, and desktop.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Filter className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Customizable Alerts</h3>
                  <p className="text-neutral-300 text-sm">
                    Choose which notifications you want to receive and when you want to receive them.
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


