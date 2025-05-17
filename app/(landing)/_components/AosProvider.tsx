"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      // Global settings
      duration: 800, // Animation duration in ms
      easing: "ease-out-cubic", // Default easing
      once: true, // Whether animation should happen only once
      offset: 50, // Offset (in px) from the original trigger point
      delay: 0, // Default delay before animation starts
      anchorPlacement: "top-bottom", // Define which position of the element regarding to window should trigger the animation
    });
  }, []);

  return <>{children}</>;
}
