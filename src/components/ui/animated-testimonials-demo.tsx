import { AnimatedTestimonials } from './animated-testimonials';

const demoTestimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Full Stack Developer',
    company: 'TechFlow',
    content:
      'This starter template saved me weeks of setup time. The Supabase integration is flawless, and the UI components are beautiful and easy to customize. Worth every penny!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544723795-4325370c1b4d?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Sarah Miller',
    role: 'Frontend Engineer',
    company: 'DesignHub',
    content:
      'I have used many starter templates, but this one stands out for its clean architecture and attention to detail. The TypeScript support is excellent, and the documentation is comprehensive.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'InnovateLabs',
    content:
      'Our team launched our MVP in record time thanks to this template. The authentication flow and user management features worked out of the box. Highly recommended!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&auto=format&fit=crop',
  },
];

export function AnimatedTestimonialsDemo() {
  return (
    <AnimatedTestimonials
      testimonials={demoTestimonials}
      trustedCompanies={['Google', 'Microsoft', 'Airbnb', 'Spotify', 'Netflix']}
    />
  );
}

