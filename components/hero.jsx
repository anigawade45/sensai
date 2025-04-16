"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    if (!imageElement) return; // ✅ Check if ref exists

    const handleScroll = () => {
      if (!imageElement) return; // ✅ Additional safety check

      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-800 via-gray-500 to-gray-700 dark:from-gray-200 dark:via-gray-300 dark:to-white">
            Your AI Career Coach for
            <br />
            Professional Success
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance your career with personalized guidance, interview preparation, and AI-powered tools for job success.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">Get Started</Button>
          </Link>
          <Link href="/features">
            <Button size="lg" className="px-8" variant="outline">Learn More</Button>
          </Link>
        </div>

        {/* Banner Image */}
        <div className="hero-image-wrapper mt-10 md:mt-0 px-4 max-w-6xl mx-auto">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpeg" // Ensure this path is correct
              width={1280}
              height={720}
              alt="Banner Sensai"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
