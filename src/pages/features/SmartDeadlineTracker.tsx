import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Bell, Clock, CheckCircle } from 'lucide-react';

export default function SmartDeadlineTracker() {
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Smart Deadline Tracker</h1>
          </div>

          <p className="text-xl text-neutral-300 mb-12">
            Never miss an important deadline with automated reminders and centralized calendar
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Stay On Top of Deadlines</h2>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-neutral-300 leading-relaxed">
                  Managing multiple application deadlines can be overwhelming. Networkly's Smart Deadline 
                  Tracker automatically tracks all your saved opportunities and sends timely reminders 
                  so you never miss a submission date. With our intelligent scheduling system, you'll 
                  always know what's coming up and have plenty of time to prepare your best applications.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Bell className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Smart Reminders</h3>
                  <p className="text-neutral-300 text-sm">
                    Receive notifications at optimal times, including one week before, three days before, 
                    and on the deadline day.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Calendar className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Centralized Calendar</h3>
                  <p className="text-neutral-300 text-sm">
                    View all your deadlines in one place with a beautiful, easy-to-read calendar interface.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Clock className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Time Management</h3>
                  <p className="text-neutral-300 text-sm">
                    See how much time you have left for each application and prioritize accordingly.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <CheckCircle className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
                  <p className="text-neutral-300 text-sm">
                    Mark applications as complete and track your submission history.
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


