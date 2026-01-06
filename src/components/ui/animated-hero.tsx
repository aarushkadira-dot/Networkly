import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

interface AnimatedHeroProps {
  onSignUpClick?: () => void;
}

function AnimatedHero({ onSignUpClick }: AnimatedHeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["scholarships", "internships", "research", "competitions", "opportunities"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
      <div className="w-full bg-dark-navy text-white flex justify-center">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 pt-44 pb-4 lg:pt-48 lg:pb-6 items-center justify-center flex-col text-center">
          <div>
            <Link to="/students">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white font-sans justify-center cursor-pointer transition-all duration-300 hover:bg-white/20 hover:scale-105">
                <Sparkles className="h-4 w-4 text-secondary" />
                <span>Find your student network</span>
              </div>
            </Link>
          </div>
          <div className="flex gap-4 flex-col w-full items-center">
            <h1 className="text-5xl md:text-7xl max-w-full tracking-tighter text-center font-semibold leading-none flex flex-col gap-0">
              <span className="text-white">Al that finds the right</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center h-[1.2em]">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent whitespace-nowrap -mt-2">
                for you, before anyone else
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-neutral-300 max-w-2xl text-center">
              Networkly connects high school students with personalized opportunities that match 
              their interests and goals. Get instant notifications, mentor feedback, and 
              never miss a deadline again.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Link to="/students">
              <InteractiveHoverButton 
                text="Explore Matches" 
                className="bg-gradient-to-r from-primary to-secondary text-white border-none px-8 py-3 hover:from-primary-600 hover:to-secondary-600 [&>span:nth-child(4)]:group-hover:text-white" 
              />
            </Link>
            <InteractiveHoverButton
              text="Learn More"
              onClick={() => {
                const featuresSection = document.getElementById('features');
                if (featuresSection) {
                  const targetPosition = featuresSection.getBoundingClientRect().top + window.scrollY;
                  const startPosition = window.scrollY;
                  const distance = targetPosition - startPosition;
                  const duration = 1500; // 1.5 seconds duration
                  let start: number | null = null;

                  function step(timestamp: number) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    const percentage = Math.min(progress / duration, 1);
                    
                    // Easing function (easeInOutCubic)
                    const ease = percentage < 0.5 
                      ? 4 * percentage * percentage * percentage 
                      : 1 - Math.pow(-2 * percentage + 2, 3) / 2;
                    
                    window.scrollTo(0, startPosition + distance * ease);

                    if (progress < duration) {
                      window.requestAnimationFrame(step);
                    }
                  }

                  window.requestAnimationFrame(step);
                }
              }}
              className="!bg-white/10 !from-transparent !to-transparent border-2 border-white/40 px-8 py-3 text-white/80 hover:border-white hover:text-white hover:!from-transparent hover:!to-transparent [&>span:nth-child(4)]:group-hover:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };

