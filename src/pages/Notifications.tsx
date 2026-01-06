import { useEffect, useState } from 'react';
import { Bell, Check, Trash2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/liquid-glass-button';
import type { Database } from '../lib/database.types';
import { Link } from 'react-router-dom';

type Notification = Database['public']['Tables']['notifications']['Row'];

function Notifications() {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadNotifications();
    }
  }, [user]);

  const loadNotifications = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (data) {
      setNotifications(data);
    } else if (error) {
      console.error('Error loading notifications:', error);
    }
    setLoading(false);
  };

  const markAsRead = async (id: string) => {
    await supabase
      .from('notifications')
      .update({ is_read: true })
      .eq('id', id);

    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, is_read: true } : n
    ));
  };

  const deleteNotification = async (id: string) => {
    await supabase
      .from('notifications')
      .delete()
      .eq('id', id);

    setNotifications(notifications.filter(n => n.id !== id));
  };

  const markAllAsRead = async () => {
    if (!user) return;

    await supabase
      .from('notifications')
      .update({ is_read: true })
      .eq('user_id', user.id)
      .eq('is_read', false);

    setNotifications(notifications.map(n => ({ ...n, is_read: true })));
  };

  const unreadCount = notifications.filter(n => !n.is_read).length;

  const getNotificationIcon = (type: string) => {
    return <Bell className="w-5 h-5" />;
  };

  const getNotificationColor = (type: string) => {
    const colors: Record<string, string> = {
      deadline: 'bg-coral-peach bg-opacity-10 text-coral-peach',
      new_opportunity: 'bg-electric-blue bg-opacity-10 text-electric-blue',
      profile_reminder: 'bg-emerald-green bg-opacity-10 text-emerald-green',
    };
    return colors[type] || 'bg-gray-100 text-gray-600';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-navy flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60 font-sans">Loading notifications...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-navy relative">
      {/* Background Gradient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
              Notifications
            </h1>
            {unreadCount > 0 && (
              <p className="text-white/60 font-sans">
                You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
              </p>
            )}
          </div>
          {unreadCount > 0 && (
            <Button onClick={markAllAsRead} size="sm">
              <Check className="w-4 h-4 mr-2" />
              Mark All Read
            </Button>
          )}
        </div>

        {notifications.length === 0 ? (
          <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl text-center py-12 px-6">
            <div className="w-16 h-16 bg-white/5 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Bell className="w-8 h-8 text-white/30" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-white mb-2">
              No Notifications Yet
            </h3>
            <p className="text-white/50 font-sans">
              We'll notify you about deadlines, new opportunities, and profile updates.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-4 transition-all hover:bg-white/[0.06] ${!notification.is_read ? 'border-l-4 border-l-primary' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${getNotificationColor(notification.type)}`}>
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-white mb-1">
                      {notification.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-2 font-sans">
                      {notification.message}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-white/40">
                      <span>
                        {new Date(notification.created_at).toLocaleDateString()} at{' '}
                        {new Date(notification.created_at).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                      {notification.link && (
                        <Link
                          to={notification.link}
                          className="text-secondary hover:underline"
                        >
                          View
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {!notification.is_read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="p-2 hover:bg-primary/10 text-primary rounded-lg transition-colors"
                        title="Mark as read"
                      >
                        <Check className="w-5 h-5" />
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notification.id)}
                      className="p-2 hover:bg-red-500/10 text-red-400 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Notifications;
