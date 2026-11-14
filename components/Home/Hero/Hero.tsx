"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
};

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 1. Create 100 particles with random position, size, speed and opacity
    const particles: Particle[] = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    // 2. Every frame: clear -> draw -> move -> bounce -> schedule next frame
    let frameId: number;
    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        // soft purple particles — visible on both the pastel and the dark background
        ctx.fillStyle = `rgba(139, 124, 246, ${p.opacity})`;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });

      frameId = requestAnimationFrame(animate);
    }
    animate();

    // 3. Keep the canvas full-screen when the window is resized
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 bg-linear-to-br from-[#d9d0ff] via-[#e6e9ff] to-[#cfe6ff] dark:from-gray-950 dark:via-[#1e1b4b] dark:to-gray-950"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center">
          {/* Badge */}
          <div
            data-aos="fade-down"
            className="inline-flex items-center space-x-2 bg-white/50 dark:bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8"
          >
            <HiSparkles className="w-5 h-5 text-primary" />
            <span className="text-ink dark:text-white font-medium">Welcome to PuluPulu</span>
          </div>

          {/* Typewriter heading */}
          <h1
            data-aos="fade-down"
            data-aos-delay="200"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-ink dark:text-white mb-6"
          >
            <TypeAnimation
              sequence={["Create Magic", 2000, "We Build Dreams", 2000, "Design Future", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-base sm:text-xl text-ink/75 dark:text-gray-200 mb-12 max-w-3xl leading-relaxed"
          >
            We craft modern, high-performance websites and digital experiences that help your brand
            stand out and grow.
          </p>

          {/* Buttons */}
          <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#"
              className="group inline-flex items-center justify-center space-x-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-hover transition-all duration-300 transform hover:shadow-2xl"
            >
              <span>Get Started</span>
              <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center border-2 border-ink text-ink dark:border-white dark:text-white px-8 py-4 rounded-full font-semibold hover:bg-ink hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ink dark:border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-ink dark:bg-white rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
