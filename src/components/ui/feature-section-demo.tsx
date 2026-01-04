import { FeatureSteps } from './feature-section';

const demoFeatures = [
  {
    step: 'Step 1',
    title: 'Discover Opportunities',
    content: 'Explore internships, scholarships, competitions, and volunteering programs verified by Networkly.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1920&auto=format&fit=crop',
  },
  {
    step: 'Step 2',
    title: 'Track Your Progress',
    content: 'Stay organized with personalized dashboards and smart reminders for every deadline.',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1920&auto=format&fit=crop',
  },
  {
    step: 'Step 3',
    title: 'Celebrate Success',
    content: 'Earn badges, share wins with mentors, and build momentum as you level up your future.',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1920&auto=format&fit=crop',
  },
];

export function FeatureStepsDemo() {
  return (
    <FeatureSteps
      features={demoFeatures}
      title="Your Journey Starts Here"
      autoPlayInterval={4000}
      imageHeight="h-[420px]"
    />
  );
}

