"use client";
import React, { useEffect, useRef, useState } from "react";
import { LazyMotion, domAnimation, m, useAnimation } from "framer-motion";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const animationControls = useAnimation();

  useEffect(() => {
    const handleVideoLoaded = () => {
      setIsLoaded(true);
    };

    const video = videoRef.current;

    if (video) {
      if (video.readyState >= 3) {
        setIsLoaded(true);
      } else {
        video.addEventListener("loadeddata", handleVideoLoaded);
      }

      return () => {
        video.removeEventListener("loadeddata", handleVideoLoaded);
      };
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      animationControls.start("visible");
    }
  }, [isLoaded, animationControls]);

  return (
    <section
      aria-hidden="true"
      className="w-full h-screen fixed top-0 left-0 right-0 bottom-0 bg-black z-0 overflow-hidden"
    >
      <div className="h-screen w-full relative">
        {/* Video Background with Fade-in Animation */}
        <LazyMotion features={domAnimation}>
          <m.div
            animate={animationControls}
            className="w-full h-full"
            initial="hidden"
            transition={{ duration: 1.2, ease: "easeOut" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            {!isLoaded && (
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <div className="w-10 h-10 border-t-2 border-blue-500 rounded-full animate-spin" />
              </div>
            )}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-fill"
              preload="auto"
            >
              <source src="/public.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </m.div>
        </LazyMotion>

        {/* Enhanced Visual Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Base dark overlay with blur - less dark */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Enhanced blue gradient overlay - more dynamic */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-indigo-900/20" />

          {/* Improved Grid pattern with animation */}
          <div className="absolute inset-0 opacity-15 mix-blend-soft-light bg-[url('data:image/svg+xml;utf8,<svg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><rect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'1.5\' fill=\'none\' stroke=\'%23ffffff33\' stroke-dasharray=\'2 2\'/></svg>')] animate-pulse" />

          {/* Horizontal line pattern with blue tint - more sophisticated with subtle animation */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg width=\'100%\' height=\'100%\' xmlns=\'http://www.w3.org/2000/svg\'><defs><pattern id=\'grid\' width=\'80\' height=\'80\' patternUnits=\'userSpaceOnUse\'><path d=\'M 80 0 L 0 0 0 80\' fill=\'none\' stroke=\'%230369a1\' stroke-width=\'1\' opacity=\'0.3\'/></pattern></defs><rect width=\'100%\' height=\'100%\' fill=\'url(%23grid)\' /></svg>')]" />

          {/* Added floating particles effect */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-float-slow" />
            <div className="absolute top-3/4 left-1/2 w-2 h-2 bg-blue-400/30 rounded-full animate-float-medium" />
            <div className="absolute top-1/3 left-3/4 w-1.5 h-1.5 bg-indigo-400/20 rounded-full animate-float-fast" />
            <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-cyan-400/30 rounded-full animate-float-medium" />
          </div>

          {/* Improved vignette effect */}
          <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
        </div>
      </div>

      {/* Add CSS for the vignette radial gradient and floating animations */}
      <style>{`
        .bg-radial-gradient {
          background: radial-gradient(
            circle,
            transparent 30%,
            rgba(0, 0, 0, 0.4) 100%
          );
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(5px);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(-7px);
          }
        }
        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(3px);
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default React.memo(VideoSection);
