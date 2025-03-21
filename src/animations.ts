export const popupAnim = {
  initial: {
    opacity: 0,
    transform: "translateY(-50%)",
  },

  animate: {
    opacity: 1,
    transform: "translateY(0%)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
    transform: "translateY(-50%)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const projectAnim = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, type: "spring" },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0.3, type: "tween" },
  },
};

export const navAnim = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const pageAnim = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      ease: "easeOut",
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.1, ease: "easeOut" },
  },
};
export const landingAnim = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.1, ease: "easeOut" },
  },
};

export const fadeAnim = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export const waveAnim = {
  initial: { pathOffset: 1, pathLength: 0 },
  animate: {
    pathOffset: 0,
    pathLength: 1,
    transition: { duration: 1.5, ease: "easeIn" },
  },
};

export const textAnim = {
  initial: { y: "100%" },
  animate: { y: "0%", transition: { duration: 0.3, ease: "easeOut" } },
};
export const buttonAnim = {
  initial: { y: "150%" },
  animate: { y: "0%", transition: { duration: 0.05, ease: "easeOut" } },
};

export const scaleAnim = {
  initial: { opacity: 0, scale: 1.1 },
  animate: { opacity: 0.75, scale: 1, transition: { duration: 0.75 } },
};

export const experienceAnim = (xLoc: number) => ({
  initial: { opacity: 0, scale: 0.5, x: xLoc },
  inView: {
    opacity: 1,
    scale: 1,
    x: "0%",
    transition: { duration: 1, delay: 0.25, type: "tween", ease: "easeOut" },
  },
});

export const stagger = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.05,
      when: "beforeChildren",
    },
  },
};

export const letterAnim = {
  initial: { scale: 0, y: 20 },
  animate: { scale: 1, y: 0, transition: { duration: 0.1 } },
};
