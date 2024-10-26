// utils/scrollReveal.js
let sr = null;

if (typeof window !== "undefined") {
  // Only load ScrollReveal on the client side
  import('scrollreveal').then((module) => {
    sr = module.default({
      reset: false, // Set to true if you want the animation to happen every time the element comes into view
      distance: '50px',
      duration: 800,
      easing: 'ease-in-out',
      delay: 300,
    });
  });
}

export default sr;
