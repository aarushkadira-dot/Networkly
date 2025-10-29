// Animation variants for Framer Motion

export const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 60 
  },
  animate: { 
    opacity: 1, 
    y: 0 
  },
  transition: { 
    duration: 0.6, 
    ease: "easeOut" 
  }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const handshakeWave = {
  initial: { rotate: 0 },
  animate: { 
    rotate: [0, 14, -8, 14, -4, 10, 0],
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6],
      repeat: Infinity,
      repeatDelay: 1
    }
  }
};

export const scaleIn = {
  initial: { 
    scale: 0.8, 
    opacity: 0 
  },
  animate: { 
    scale: 1, 
    opacity: 1 
  },
  transition: { 
    duration: 0.5 
  }
};

export const slideInLeft = {
  initial: { 
    x: -100, 
    opacity: 0 
  },
  animate: { 
    x: 0, 
    opacity: 1 
  },
  transition: { 
    duration: 0.6 
  }
};

export const slideInRight = {
  initial: { 
    x: 100, 
    opacity: 0 
  },
  animate: { 
    x: 0, 
    opacity: 1 
  },
  transition: { 
    duration: 0.6 
  }
};


