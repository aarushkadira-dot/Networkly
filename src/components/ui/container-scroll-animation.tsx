import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ContainerScrollProps {
  titleComponent: ReactNode;
  children: ReactNode;
}

export function ContainerScroll({ titleComponent, children }: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scaleRange = isMobile ? [0.95, 0.99] : [1.04, 1];

  const rotate = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const translate = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <div className="relative z-10 flex items-center justify-center pb-28 pt-16 md:pb-40 md:pt-24" ref={containerRef}>
      <div className="w-full px-4 md:px-8" style={{ perspective: '1200px' }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
}

function Header({ translate, titleComponent }: { translate: MotionValue<number>; titleComponent: ReactNode }) {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="relative z-20 mx-auto max-w-5xl text-center md:text-left"
    >
      {titleComponent}
    </motion.div>
  );
}

function Card({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: ReactNode;
}) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
        willChange: 'transform',
      }}
      className="mx-auto mt-6 w-full max-w-5xl rounded-[32px] border border-white/10 bg-gradient-to-br from-dark-navy via-deep-blue to-royal-blue p-4 md:mt-10 md:p-8"
    >
      <div className="w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 md:p-6">
        {children}
      </div>
    </motion.div>
  );
}

