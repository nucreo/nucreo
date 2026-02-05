import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Layout from "@/components/nucreo/Layout";
import { ScrollToTopButton } from "@/components/nucreo/ScrollToTopButton";
import { usePageSlider } from "@/contexts/PageSliderContext";
import { BracketLabel } from "@/components/nucreo/BracketLabel";
import { SectionTitle } from "@/components/nucreo/SectionTitle";
import { AnimatedSection } from "@/components/nucreo/AnimatedSection";
import { AnimatedTextLine } from "@/components/nucreo/AnimatedText";
import { TimelineColumn, TimelineStepSimple } from "@/components/nucreo/TimelineStep";
import {
  buttonHover,
  buttonTap,
  defaultViewport,
  EASING,
  heroStaggerContainer,
  heroStaggerItem,
  parallaxConfig,
  primaryButtonHoverTech,
  staggerContainer,
  staggerItem,
  TIMING
} from "@/lib/animations";

/**
 * ParallaxImage - Image wrapper with parallax scroll effect
 */
function ParallaxImage({
  src,
  alt,
  className
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: parallaxConfig.offset
  });
  const y = useTransform(scrollYProgress, [0, 1], parallaxConfig.rangeSubtle);

  return (
    <motion.div ref={ref} style={{ y }} className="will-change-transform">
      <img src={src} alt={alt} className={className} />
    </motion.div>
  );
}

/**
 * TechFooter animation variants
 */
const footerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.normal,
      ease: EASING.smooth
    }
  }
};

const logoScaleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: TIMING.slow
    }
  }
};

const contactLinkVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -10
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: TIMING.normal,
      ease: EASING.smooth
    }
  }
};

function TechFooter() {
  return (
    <footer id="tech-contact" className="border-t border-white/10 bg-black/60">
      <motion.div
        className="container py-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={footerContainerVariants}
      >
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Title */}
          <motion.h3
            className="text-2xl md:text-3xl font-extrabold tracking-tight"
            variants={fadeUpVariants}
          >
            CREATIVE TECH AGENCY
          </motion.h3>

          {/* Contact grid */}
          <motion.div
            className="grid gap-8 md:grid-cols-3 w-full max-w-3xl items-center"
            variants={fadeUpVariants}
          >
            {/* Email */}
            <motion.div
              className="order-2 md:order-1 text-sm text-white/70"
              variants={contactLinkVariants}
            >
              <motion.div
                className="flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: TIMING.fast }}
              >
                <span className="sr-only">Email</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a
                  className="hover:underline hover:text-white transition-colors"
                  href="mailto:nucreoglobal@gmail.com"
                >
                  nucreoglobal@gmail.com
                </a>
              </motion.div>
            </motion.div>

            {/* Logo */}
            <motion.div
              className="order-1 md:order-2 flex items-center justify-center"
              variants={logoScaleVariants}
            >
              <div className="relative inline-flex items-center justify-center rounded-lg p-2">
                <video
                  src="/logo.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-29 w-29 rounded"
                />
              </div>
            </motion.div>

            {/* Telegram */}
            <motion.div
              className="order-3 text-sm text-white/70"
              variants={contactLinkVariants}
            >
              <motion.div
                className="flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: TIMING.fast }}
              >
                <span className="sr-only">Telegram</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M9.04 15.41l-.39 5.49c.56 0 .8-.24 1.09-.53l2.62-2.52 5.43 3.98c1 .55 1.72.26 1.99-.93l3.61-16.89h.01c.32-1.47-.53-2.05-1.5-1.69L1.5 9.6c-1.45.56-1.43 1.37-.25 1.73l5.49 1.71L18.88 6.5c.62-.41 1.18-.18.72.23" />
                </svg>
                <a
                  className="hover:underline hover:text-white transition-colors"
                  href="https://t.me/nucreotech"
                  target="_blank"
                  rel="noreferrer"
                >
                  @nucreotech
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.p className="text-xs text-white/40" variants={fadeUpVariants}>
            &copy; {new Date().getFullYear()} NUCREO TECH. All rights reserved.
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
}

export default function TechIndex() {
  const { goToMain } = usePageSlider();

  return (
    <Layout>
      <div className="theme-tech">
        {/* Hero */}
        <section
          id="tech-hero"
          className="glow-container glow-center relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/30 to-black" />

          {/* Top Labels - between title and top of screen */}
          <div className="absolute top-[20%] left-[25%] -translate-x-1/2 z-20">
            <BracketLabel variant="orange" delay={0.6} floatDuration={3.5}>
              web dev
            </BracketLabel>
          </div>
          <div className="absolute top-[20%] left-[75%] -translate-x-1/2 z-20">
            <BracketLabel variant="orange" delay={0.7} floatDuration={4}>
              ios dev
            </BracketLabel>
          </div>

          <div className="container relative z-10 pt-24 pb-16">
            {/* Hero Title Layout */}
            <motion.div
              className="relative mt-10 mb-10 flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={heroStaggerContainer}
            >
              {/* Wrapper that matches title width */}
              <div className="inline-flex flex-col">
                {/* Labels positioned relative to title */}
                <motion.div
                  className="flex justify-between items-end mb-2 px-1"
                  variants={heroStaggerItem}
                >
                  <p className="text-white text-3xl md:text-6xl font-light whitespace-nowrap">
                    We're
                  </p>
                  <p className="text-sm md:text-base font-light bg-gradient-to-r from-[#FF5E00] to-[#AD0000] bg-clip-text text-transparent text-right whitespace-nowrap">
                    Creative design and tech agency
                  </p>
                </motion.div>
                {/* Title */}
                <AnimatedTextLine
                  as="h1"
                  className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-center"
                  delay={0.3}
                >
                  "NUCREO TECH"
                </AnimatedTextLine>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex items-center justify-center gap-3 flex-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={staggerContainer}
            >
              <motion.a
                href="#tech-offer"
                className="inline-flex items-center rounded-md bg-gradient-to-tr from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] px-5 py-3 font-semibold text-white shadow-lg shadow-blue-500/20"
                variants={staggerItem}
                whileHover={primaryButtonHoverTech}
                whileTap={buttonTap}
              >
                Explore services
              </motion.a>
              <motion.button
                onClick={goToMain}
                className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 hover:bg-white/10 transition-colors"
                variants={staggerItem}
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Nucreo
              </motion.button>
              <motion.a
                href="#tech-contact"
                className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 hover:bg-white/10"
                variants={staggerItem}
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                Contact
              </motion.a>
            </motion.div>
          </div>

          {/* Bottom Labels - under title with good margin */}
          <div className="absolute top-[86%] left-[33%] -translate-x-1/2 z-20">
            <BracketLabel variant="orange" delay={0.8} floatDuration={3.2}>
              typescript
            </BracketLabel>
          </div>
          <div className="absolute top-[86%] ml-7 left-[65%] -translate-x-1/2 z-20">
            <BracketLabel variant="orange" delay={0.9} floatDuration={3.8}>
              node.js
            </BracketLabel>
          </div>
        </section>

        {/* Tech Expertise */}
        <section
          id="tech-expertise"
          className="glow-container glow-top-right py-20 md:py-28 scroll-mt-24"
        >
          <div className="container relative z-10">
            <AnimatedSection direction="up" className="mb-5">
              <h2 className="text-4xl md:text-6xl tracking-tight mb-1">
                <span className="font-normal">Our</span>{" "}
                <span className="font-extrabold uppercase">EXPERTISE</span>
              </h2>
            </AnimatedSection>
            <motion.div
              className="grid gap-6 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={staggerContainer}
            >
              {[
                { src: "/card1.png", alt: "Industry Tools and Partners" },
                { src: "/card2.png", alt: "Engineering Experience" },
                { src: "/card3.png", alt: "User Experience Focus" }
              ].map((card) => (
                <motion.img
                  key={card.alt}
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-auto object-cover rounded-xl"
                  variants={staggerItem}
                  whileHover={{ y: -8, transition: { duration: TIMING.fast } }}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Offered */}
        <section
          id="tech-offer"
          className="glow-container glow-center py-20 md:py-28 scroll-mt-24"
        >
          <div className="container relative z-10">
            <AnimatedSection direction="up" className="flex justify-center mb-12">
              <div className="inline-flex flex-col text-left">
                <p className="text-3xl md:text-5xl text-white font-light">
                  What we
                </p>
                <h2 className="text-7xl md:text-9xl font-extrabold tracking-tight mt-2">
                  &nbsp;&nbsp;&nbsp;OFFER
                </h2>
              </div>
            </AnimatedSection>
            <motion.div
              className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 mt-16"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={staggerContainer}
            >
              {[
                { id: "tech-websites", name: "WEB SOLUTIONS", mobileSpan: false },
                { id: "tech-ios", name: "IOS DEVELOPMENT", mobileSpan: false },
                { id: "tech-custom", name: "CUSTOM & SPECIAL REQUESTS", mobileSpan: true },
              ].map((s) => (
                <motion.a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`inline-flex justify-center px-4 md:px-8 py-3.5 text-sm md:text-lg tracking-wide text-white rounded-full hover:bg-white/20 transition-all ${
                    s.mobileSpan ? "col-span-2" : ""
                  }`}
                  variants={staggerItem}
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                >
                  {s.name}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* WEB SOLUTIONS */}
        <section
          id="tech-websites"
          className="glow-container glow-bottom-left py-16 md:py-24 scroll-mt-24"
        >
          <div className="container relative z-10 grid gap-10 md:grid-cols-2 items-center">
            <AnimatedSection direction="left">
              <h3 className="text-3xl md:text-5xl font-extrabold mb-8">
                WEB SOLUTIONS
              </h3>

              <motion.div
                className="space-y-8"
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                variants={staggerContainer}
              >
                {/* Item 1 */}
                <motion.div className="flex gap-6 items-start" variants={staggerItem}>
                  <div className="flex-shrink-0">
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold text-white">1</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Strategic Logic Audit
                    </h4>
                    <p className="text-base md:text-lg text-white/60">
                      In-depth analysis of your business logic to engineer a
                      high-conversion structure that drives profit
                    </p>
                  </div>
                </motion.div>

                {/* Item 2 */}
                <motion.div className="flex gap-6 items-start" variants={staggerItem}>
                  <div className="flex-shrink-0">
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold text-white">2</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Premium Sales-Focused Design
                    </h4>
                    <p className="text-base md:text-lg text-white/60">
                      Creating mobile-first, aesthetically driven interfaces
                      specifically optimized to sell your product or service
                    </p>
                  </div>
                </motion.div>

                {/* Item 3 */}
                <motion.div className="flex gap-6 items-start" variants={staggerItem}>
                  <div className="flex-shrink-0">
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold text-white">3</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Seamless Ecosystem Integration
                    </h4>
                    <p className="text-base md:text-lg text-white/60">
                      Connecting your platform to CRMs, social media, email
                      services for a unified & automated business flow
                    </p>
                  </div>
                </motion.div>

                {/* Item 4 */}
                <motion.div className="flex gap-6 items-start" variants={staggerItem}>
                  <div className="flex-shrink-0">
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold text-white">4</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Interactive 3D & Advanced Animations
                    </h4>
                    <p className="text-base md:text-lg text-white/60">
                      Elevating engagement with scalable digital platforms,
                      admin panels, and high-end interactive elements
                    </p>
                  </div>
                </motion.div>

                {/* Item 5 */}
                <motion.div className="flex gap-6 items-start" variants={staggerItem}>
                  <div className="flex-shrink-0">
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold text-white">5</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Full Deployment & Technical Support
                    </h4>
                    <p className="text-base md:text-lg text-white/60">
                      WebView/PWA and App Store submission
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative w-full overflow-hidden rounded-xl">
                <ParallaxImage
                  src="/mac1.png"
                  alt="Web Solutions - Modern web development showcase"
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section
          id="tech-ios"
          className="glow-container glow-top-right py-16 md:py-24 scroll-mt-24"
        >
          <div className="container relative z-10 grid gap-10 md:grid-cols-2 items-center">
            <AnimatedSection direction="left">
              <h3 className="text-3xl md:text-5xl font-extrabold mb-8">
                IOS DEVELOPMENT
              </h3>
              <motion.div
                className="space-y-8"
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                variants={staggerContainer}
              >
                {/* Item 1 */}
                <motion.div className="flex gap-6 items-start" variants={staggerItem}>
                  <div className="flex-shrink-0">
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold text-white">1</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Native SwiftUI Architecture
                    </h4>
                    <p className="text-base md:text-lg text-white/60">
                      High-performance engineering using Apple's latest
                      framework
                    </p>
                  </div>
                </motion.div>

                {/* Item 2 */}
                <motion.div className="flex gap-6 items-start" variants={staggerItem}>
                  <div className="flex-shrink-0">
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold text-white">2</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      HIG-Compliant UI/UX
                    </h4>
                    <p className="text-base md:text-lg text-white/60">
                      Seamless user journeys following Human Interface
                      Guidelines
                    </p>
                  </div>
                </motion.div>

                {/* Item 3 */}
                <motion.div className="flex gap-6 items-start" variants={staggerItem}>
                  <div className="flex-shrink-0">
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold text-white">3</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Secure Auth & Data
                    </h4>
                    <p className="text-base md:text-lg text-white/60">
                      Integrated Apple ID/Phone authentication and real-time
                      databases
                    </p>
                  </div>
                </motion.div>

                {/* Item 4 */}
                <motion.div className="flex gap-6 items-start" variants={staggerItem}>
                  <div className="flex-shrink-0">
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold text-white">4</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Retention & Monetization
                    </h4>
                    <p className="text-base md:text-lg text-white/60">
                      Advanced push notifications and native payment gateways
                    </p>
                  </div>
                </motion.div>

                {/* Item 5 */}
                <motion.div className="flex gap-6 items-start" variants={staggerItem}>
                  <div className="flex-shrink-0">
                    <div className="rounded-full p-[2px] bg-gradient-to-br from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))]">
                      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold text-white">5</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      App Store Lifecycle
                    </h4>
                    <p className="text-base md:text-lg text-white/60">
                      End-to-end submission management and moderation support
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative w-full overflow-hidden rounded-xl">
                <ParallaxImage
                  src="/phones.png"
                  alt="IOS DEVELOPMENT"
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CUSTOM & SPECIAL REQUESTS */}
        <section
          id="tech-custom"
          className="glow-container glow-center py-16 md:py-24 scroll-mt-24"
        >
          {/* Python Image - positioned absolutely on the right */}
          <img
            src="/python_image.png"
            alt="Python"
            className="absolute right-0 top-1/4 md:top-1/3 -translate-y-1/2 z-20 w-[22%] md:w-[10%] pointer-events-none"
          />

          {/* Telegram Image - positioned absolutely, centered, behind cards */}
          <img
            src="/telegram_image.png"
            alt="Telegram"
            style={{ bottom: -60 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 z-0 w-48 md:w-64 lg:w-72 pointer-events-none"
          />

          <div className="container relative z-10">
            <AnimatedSection direction="up">
              <h3 className="text-3xl md:text-5xl mb-12 text-left">
                <span className="font-bold">CUSTOM & SPECIAL</span>
                <br />
                <span className="font-light">REQUESTS</span>
              </h3>
            </AnimatedSection>

            <div className="relative">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                variants={staggerContainer}
              >
                {/* Card 1 */}
                <motion.div
                  className="rounded-xl p-[1px] bg-gradient-to-br from-[#666666] to-[#000000]"
                  variants={staggerItem}
                  whileHover={{ y: -8, transition: { duration: TIMING.fast } }}
                >
                  <div className="rounded-xl bg-gradient-to-br from-[#191919] to-[#000000] p-6 flex gap-6 items-start h-full">
                    <div className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-[#FF5E00] to-[#AD0000] bg-clip-text text-transparent">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                        Automation:
                      </h4>
                      <p className="text-base text-white/70">
                        High-tier bots for automated sales, support, and
                        internal notifications
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  className="rounded-xl p-[1px] bg-gradient-to-br from-[#666666] to-[#000000]"
                  variants={staggerItem}
                  whileHover={{ y: -8, transition: { duration: TIMING.fast } }}
                >
                  <div className="rounded-xl bg-gradient-to-br from-[#191919] to-[#000000] p-6 flex gap-6 items-start h-full">
                    <div className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-[#FF5E00] to-[#AD0000] bg-clip-text text-transparent">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                        Custom Software:
                      </h4>
                      <p className="text-base text-white/70">
                        Specialized scripts, data parsers, and automation tools
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  className="rounded-xl p-[1px] bg-gradient-to-br from-[#666666] to-[#000000]"
                  variants={staggerItem}
                  whileHover={{ y: -8, transition: { duration: TIMING.fast } }}
                >
                  <div className="rounded-xl bg-gradient-to-br from-[#191919] to-[#000000] p-6 flex gap-6 items-start h-full">
                    <div className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-[#FF5E00] to-[#AD0000] bg-clip-text text-transparent">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                        AI Implementation:
                      </h4>
                      <p className="text-base text-white/70">
                        Integrating AI-driven features into your existing
                        workflow
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                  className="rounded-xl p-[1px] bg-gradient-to-br from-[#666666] to-[#000000]"
                  variants={staggerItem}
                  whileHover={{ y: -8, transition: { duration: TIMING.fast } }}
                >
                  <div className="rounded-xl bg-gradient-to-br from-[#191919] to-[#000000] p-6 flex gap-6 items-start h-full">
                    <div className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-[#FF5E00] to-[#AD0000] bg-clip-text text-transparent">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                        Creative Tech:
                      </h4>
                      <p className="text-base text-white/70">
                        Specialized requests for cutting-edge creative
                        productions
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section
          id="tech-workflow"
          className="glow-container glow-multiple py-20 md:py-28 scroll-mt-24"
        >
          <div className="container relative z-10">
            <SectionTitle title="Development Process" />
            <div className="grid gap-x-12 gap-y-0 md:grid-cols-2">
              {/* Left Column */}
              <TimelineColumn>
                <TimelineStepSimple
                  number={1}
                  title="Brief consultation"
                  description={
                    <>
                      Understanding your business, target audience, and
                      <br />
                      technical needs.
                    </>
                  }
                  minHeight="140px"
                />
                <TimelineStepSimple
                  number={2}
                  title="Pre-payment"
                  description={
                    <>
                      50% upfront for new clients. 100% upfront for <br />{" "}
                      returning clients.
                    </>
                  }
                  filled
                  minHeight="140px"
                />
                <TimelineStepSimple
                  number={3}
                  title="Design Mockups"
                  description={
                    <>
                      Figma prototypes for desktop & mobile.
                      <br /> 2 revision rounds included.
                    </>
                  }
                  minHeight="140px"
                />
                <TimelineStepSimple
                  number={4}
                  title="Development Sprint"
                  description="Agile development with weekly demos and staging access."
                  isLast
                />
              </TimelineColumn>

              {/* Right Column */}
              <TimelineColumn>
                <TimelineStepSimple
                  number={5}
                  title="Approval and revisions"
                  description={
                    <>
                      Adjustments to ensure the final result
                      <br /> meets your expectations
                    </>
                  }
                  minHeight="140px"
                />
                <TimelineStepSimple
                  number={6}
                  title="Launch & Deployment"
                  description={
                    <>
                      Full technical setup: hosting, SSL, analytics, <br />
                      App Store submission.
                    </>
                  }
                  minHeight="140px"
                />
                <TimelineStepSimple
                  number={7}
                  title="Final Payment"
                  description={
                    <>
                      50% — remaining balance upon project completion
                      <br /> (for new clients only).
                    </>
                  }
                  filled
                  minHeight="140px"
                />
                <TimelineStepSimple
                  number={8}
                  title="Paid Revisions"
                  description="Extra revisions billed separately."
                  filled
                  isLast
                />
              </TimelineColumn>
            </div>
          </div>
        </section>

        <TechFooter />
        <ScrollToTopButton />
      </div>
    </Layout>
  );
}
