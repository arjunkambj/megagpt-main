"use client";

import type { ImageProps } from "next/image";

import { LazyMotion, domAnimation, m, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const animationVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const FadeInImage = (props: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const animationControls = useAnimation();

  useEffect(() => {
    if (isLoaded) {
      animationControls.start("visible");
    }
  }, [isLoaded]);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        animate={animationControls}
        initial="hidden"
        transition={{ duration: 0.5, ease: "easeOut" }}
        variants={animationVariants}
      >
        {}
        <Image {...props} onLoad={() => setIsLoaded(true)} />
      </m.div>
    </LazyMotion>
  );
};

export default FadeInImage;
