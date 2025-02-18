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
  },
  animate: {
    scale: 1,
    transition: { type: "tween", duration: 0.5, ease: "easeIn" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};
