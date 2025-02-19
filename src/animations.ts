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
    scale: 0.8,
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
