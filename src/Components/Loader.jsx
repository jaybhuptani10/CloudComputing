import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import intro from "./Intro.mp4";
import {
  delay,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const Loader = () => {
  const variants = {
    hidden: { opacity: 1, y: 0, transition: { duration: 2 } },
    visible: { opacity: 0, y: 1500, delay: 3 },
  };
  const [visible, setVisible] = useState(true);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start ", "end start"],
  });
  const images = useMemo(() => {
    const loadedImages = [];
    for (let i = 1; i < 600; i++) {
      const img = new Image();
      img.src = `/Ocean/${i}.webp`; // Adjusted path
      // Log the image path

      loadedImages.push(img);
    }

    return loadedImages;
  }, []);
  const currentIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [1, images.length * (1 / 1)]
  );

  const render = useCallback(
    (index) => {
      const image = images[Math.floor(index / 1) - 1];
      if (image && image.complete && image.naturalWidth !== 0) {
        ref.current.src = image.src;
      }
    },
    [images]
  );

  useMotionValueEvent(currentIndex, "change", (latest) => {
    render(Number(latest.toFixed()));
  });

  useEffect(() => {
    const imgElement = ref.current;
    imgElement.style.width = "100%";
    imgElement.style.height = "auto";
    imgElement.style.objectFit = "contain";
    if (images.length > 0) {
      imgElement.src = images[0].src; // Set default image
    }
  }, [images]);
  const scrollRed = useRef(null);

  return (
    <div className="h-full " ref={scrollRed}>
      <motion.img
        // viewport={{ root: scrollRed.current }}
        className="w-100 h-100 object-contain object-center"
        ref={ref}
        alt="Dynamic"
      />
    </div>
  );
};

export default Loader;
