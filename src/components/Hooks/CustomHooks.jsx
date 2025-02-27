import { useInView } from "framer-motion";
import { useRef } from "react";
const useAnimation = () => {
  const ref = useRef();

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2, // Trigger animation when 50% of the element is in the viewport
  });
  const sectionTitleAnimation = {
    variants: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    },
    transition: { duration: 0.5, ease: "easeOut" },
  };
  const sectionAnimation = {
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
    transition: { duration: 1, ease: "easeOut" },
  };
  const containerAnimation = {
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
    transition: {
      staggerChildren: 0.2, // Delay between animations of each child
    },
  };
  const gridItemAnimation = {
    variants: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  };

  return { sectionTitleAnimation, sectionAnimation, ref,containerAnimation,gridItemAnimation };
};

export default useAnimation;
