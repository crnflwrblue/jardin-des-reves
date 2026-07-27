// VIEWPORT SETTINGS
export const viewport = {
  once: true,
  amount: 0.3,
};

// TRANSITION
const transition = {
  duration: 0.8,
  ease: "easeOut",
};

// FADE UP
export const fadeUp = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
        ...transition,
        delay,
    }
  },
});

// FADE LEFT
export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition,
  },
};

// FADE RIGHT
export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition,
  },
};

// FADE
export const fade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition,
  },
};

// SECTION CONTAINER
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// CARD
export const cardAnimation = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  },
});

// DECORATIVE FLOWER
export const floatingFlower = {
  animate: {
    y: [0, -4, 0],
    rotate: [0, 2, 0, -2, 0],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  },
};