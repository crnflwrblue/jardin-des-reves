import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, viewport } from "../motion/animation";

const Hero = () => {
  return (
    <section id="home">
      <div className="relative h-screen">
        {/* BACKGROUND IMAGE */}
        <motion.img
          src="/images/hero-background.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        />
        <div className="absolute inset-0 bg-dark/50" />

        {/* CONTENT */}
        <motion.div
          className="relative z-10 flex h-full items-center justify-center"
          variants={fadeInUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="text-neutral text-center max-w-2xl px-6 space-y-6">
            <p className="uppercase tracking-[0.3em] text-champagne">
              Every Bloom Tells a Story
            </p>
            <h1 className="font-cormorant font-semibold text-6xl lg:text-8xl text-neutral">
              Jardin des Rêves
            </h1>
            <motion.p
              className="leading-8 text-neutral/90"
              variants={fadeInUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              Handcrafted floral arrangements inspired by nature's quiet
              elegance. From heartfelt celebrations to everyday moments, our
              blooms are thoughtfully curated to bring beauty, warmth, and
              lasting memories into every space.
            </motion.p>

            {/* BUTTON */}
            <div className="mt-8 flex items-center justify-center gap-4 flex-col sm:flex-row">
              <button className="primary-btn">Shop Collection</button>{" "}
              <button className="secondary-btn">Build Your Bouquet</button>
            </div>

            <p className="max-w-xs sm:max-w-2xl mx-auto flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4 gap-y-2 text-xs sm:text-sm uppercase tracking-widest text-neutral/80">
              <span>Fresh Flowers</span>
              <span className="text-champagne">✿</span>
              <span>Artisan Arrangements</span>
              <span className="text-champagne">✿</span>
              <span>Same-Day Delivery</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
