import { forwardRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = forwardRef<HTMLButtonElement, InteractiveHoverButtonProps>(
  ({ text = 'Button', className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 hover:from-primary-600 hover:to-secondary-600',
          className
        )}
        {...props}
      >
        <span className="absolute inset-0 z-10 rounded-full bg-gradient-to-r from-primary-600/20 via-primary-400/25 to-secondary/20 transform scale-0 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100" />
        <span className="relative z-30 flex w-full items-center justify-center px-5 text-white transition-all duration-300 ease-out group-hover:justify-start">
          <span className="text-base font-semibold tracking-tight leading-none transition-transform duration-300 ease-out group-hover:-translate-x-4">
            {text}
          </span>
          <ArrowRight className="pointer-events-none absolute right-4 h-5 w-5 opacity-0 stroke-[2.5] transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:opacity-100" />
        </span>
      </button>
    );
  }
);

InteractiveHoverButton.displayName = 'InteractiveHoverButton';

export { InteractiveHoverButton };

