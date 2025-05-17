"use client";

import React from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { addToast } from "@heroui/toast";
import { motion } from "framer-motion";
import Image from "next/image";

import { signIn } from "@/lib/auth-client";

export default function Component() {
  const [googleLoading, setGoogleLoading] = useState(false);
  const [twitterLoading, setTwitterLoading] = useState(false);

  const handelSolanaLogin = async () => {
    addToast({
      title: "it's coming soon",
      description: "We are working on opensource WEB3-AUTH",
      color: "danger",
    });
  };

  return (
    <div className="relative flex h-dvh w-full overflow-hidden">
      {/* Brand Logo */}
      <div className="absolute left-2 top-5 lg:left-5 z-10">
        <div className="flex items-center">
          <Button
            as={Link}
            className="bg-transparent hover:text-teal-500 transition-colors"
            href="/"
            variant="flat"
          >
            <Icon icon="solar:arrow-left-linear" width={24} />
            <p className="font-medium">MegaGPT</p>
          </Button>
        </div>
      </div>

      {/* Login Form */}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        className="flex w-full items-center justify-center  lg:w-1/2 relative"
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.6 }}
      >
        {/* Subtle background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-10 mix-blend-soft-light bg-[url('data:image/svg+xml;utf8,<svg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><rect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'1.5\' fill=\'none\' stroke=\'%23ffffff33\' stroke-dasharray=\'2 2\'/></svg>')]" />
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-teal-400/30 rounded-full animate-float-slow" />
          <div className="absolute top-3/4 left-1/2 w-2 h-2 bg-cyan-400/20 rounded-full animate-float-medium" />
          <div className="absolute top-1/3 left-3/4 w-1.5 h-1.5 bg-emerald-400/20 rounded-full animate-float-fast" />
        </div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex w-full max-w-sm flex-col items-center gap-4 p-4 z-10 backdrop-blur-sm bg-black/30 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full text-left">
            <p className="pb-2 text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">
              Welcome Back
            </p>
            <p className="text-small text-default-500">
              Continue with your account
            </p>
          </div>

          <div className="flex w-full flex-col gap-2">
            <Button
              className="border-neutral-700 hover:bg-neutral-800/50 transition-all"
              isLoading={googleLoading}
              startContent={<Icon icon="flat-color-icons:google" width={24} />}
              variant="bordered"
              onPress={async () => {
                await signIn.social(
                  {
                    provider: "google",
                    callbackURL: "/dashboard",
                  },
                  {
                    onRequest: () => {
                      setGoogleLoading(true);
                    },
                    onResponse: () => {
                      setGoogleLoading(false);
                    },
                  },
                );
              }}
            >
              Continue with Google
            </Button>
            <Button
              className="border-neutral-700 hover:bg-neutral-800/50 transition-all"
              isLoading={twitterLoading}
              startContent={
                <Icon
                  className="text-default-500"
                  icon="mdi:twitter"
                  width={24}
                />
              }
              variant="bordered"
              onPress={async () => {
                await signIn.social(
                  {
                    provider: "twitter",
                    callbackURL: "/dashboard",
                  },
                  {
                    onRequest: () => {
                      setTwitterLoading(true);
                    },
                    onResponse: () => {
                      setTwitterLoading(false);
                    },
                  },
                );
              }}
            >
              Continue with Twitter
            </Button>
          </div>

          <div className="flex w-full items-center gap-4 py-2">
            <Divider className="flex-1" />
            <p className="shrink-0 text-tiny text-default-500">OR</p>
            <Divider className="flex-1" />
          </div>

          <Button
            className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:opacity-90 transition-all shadow-lg hover:shadow-cyan-500/20"
            startContent={<Icon icon="cryptocurrency:sol" width={24} />}
            onPress={handelSolanaLogin}
          >
            Connect Solana Wallet
          </Button>
        </motion.div>
      </motion.div>

      {/* Right side - Enhanced with more visual elements */}
      <motion.div
        animate={{ opacity: 1 }}
        className="relative hidden w-1/2 flex-col-reverse p-10 lg:flex overflow-hidden"
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Dynamic background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute z-10" />
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url(/bg.avif)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.7) contrast(1.1)",
            }}
          />

          {/* Advanced animated overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/30 via-cyan-900/20 to-transparent opacity-70 z-20" />
          <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg width=\'100%\' height=\'100%\' xmlns=\'http://www.w3.org/2000/svg\'><defs><pattern id=\'grid\' width=\'80\' height=\'80\' patternUnits=\'userSpaceOnUse\'><path d=\'M 80 0 L 0 0 0 80\' fill=\'none\' stroke=\'%230369a1\' stroke-width=\'1\' opacity=\'0.3\'/></pattern></defs><rect width=\'100%\' height=\'100%\' fill=\'url(%23grid)\' /></svg>')] z-20" />

          {/* Decorative 3D elements */}
          <div className="absolute top-[20%] right-[30%] w-32 h-32 rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/5 blur-[60px] animate-pulse-slow z-10" />
          <div className="absolute bottom-[30%] left-[20%] w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/5 blur-[80px] animate-pulse-medium z-10" />

          {/* Floating geometric shapes */}
          <motion.div
            animate={{ opacity: 0.7, rotateZ: 360 }}
            className="absolute top-[15%] right-[25%] w-64 h-64 z-20"
            initial={{ opacity: 0, rotateZ: 0 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full border border-teal-500/20 rounded-lg opacity-30 transform rotate-45" />
            <div className="absolute inset-5 border border-emerald-500/20 rounded-lg opacity-20 transform rotate-[30deg]" />
            <div className="absolute inset-10 border border-cyan-500/20 rounded-lg opacity-10 transform rotate-[15deg]" />
          </motion.div>

          {/* Glowing points of light */}
          <div className="absolute top-[40%] right-[15%] w-2 h-2 bg-teal-400 rounded-full opacity-60 blur-[2px] animate-glow" />
          <div className="absolute top-[30%] left-[25%] w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-60 blur-[1px] animate-glow-delay" />
          <div className="absolute bottom-[20%] right-[35%] w-1 h-1 bg-emerald-400 rounded-full opacity-60 blur-[1px] animate-glow-long" />
        </div>

        {/* Enhanced testimonial card */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-end gap-4 z-30 relative"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="backdrop-blur-md bg-white/10 p-8 rounded-lg shadow-lg border border-white/10 w-full max-w-md">
            {/* Quote icon */}
            <div className="absolute -top-4 -right-4 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg">
              <svg
                className="opacity-80"
                fill="white"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
            </div>

            <p className="w-full text-lg text-white/90 italic mb-6 leading-relaxed">
              MegaGPT has transformed our workflow. Having all AI models in one
              place saves us hours daily and delivers better results than any
              single AI could.
            </p>

            <div className="flex items-center justify-end space-x-3 pt-2 border-t border-white/10">
              <div>
                <p className="text-right text-white font-semibold">
                  Sarah Chen
                </p>
                <p className="text-right text-white/70 text-sm">
                  Product Lead at TechForward
                </p>
              </div>
              <div className="h-12 w-12 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 blur-[1px] opacity-70" />
                <Image
                  alt="Sarah Chen"
                  className="h-12 w-12 rounded-full object-cover border-2 border-white/30 relative z-10"
                  height={48}
                  src="/150.jpeg"
                  width={48}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Add animation definitions */}
      <style>{`
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
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }
        @keyframes pulse-medium {
          0%,
          100% {
            opacity: 0.07;
          }
          50% {
            opacity: 0.15;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        .animate-pulse-medium {
          animation: pulse-medium 7s ease-in-out infinite;
        }
        @keyframes glow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.3);
          }
        }
        @keyframes glow-delay {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }
        @keyframes glow-long {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.5);
          }
        }
        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }
        .animate-glow-delay {
          animation: glow-delay 6s ease-in-out infinite;
        }
        .animate-glow-long {
          animation: glow-long 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
