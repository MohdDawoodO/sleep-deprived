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

export const pageAnim = (d: number, e: number, s: number) => ({
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: d,
      ease: "easeOut",
      staggerChildren: s,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: e, ease: "easeOut" },
  },
});

//only to control children staggering
export const stagger = (value: number) => ({
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: value,
      when: "beforeChildren",
    },
  },
});

export const fadeAnim = (value: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: value, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: value, ease: "easeOut" } },
});

export const waveAnim = {
  initial: { pathOffset: 1, pathLength: 0 },
  animate: {
    pathOffset: 0,
    pathLength: 1,
    transition: { duration: 1.5, ease: "easeIn" },
  },
};

export const scaleAnim = {
  initial: { opacity: 0, scale: 1.1 },
  animate: { opacity: 0.75, scale: 1, transition: { duration: 1 } },
};

export const letterAnim = {
  initial: { scale: 0, y: 20 },
  animate: { scale: 1, y: 0, transition: { duration: 0.1 } },
};
