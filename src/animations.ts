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
  intital: {
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
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.2, ease: "easeOut" },
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
  animate: { y: "0%", transition: { duration: 0.5, ease: "easeOut" } },
};
export const buttonAnim = {
  initial: { y: "150%" },
  animate: { y: "0%", transition: { duration: 0.2, ease: "easeOut" } },
};

export const scaleAnim = {
  initial: { opacity: 0, scale: 1.2 },
  animate: { opacity: 0.75, scale: 1, transition: { duration: 1 } },
};
