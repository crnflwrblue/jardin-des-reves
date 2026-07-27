import React from "react";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, viewport } from "../motion/animation";

const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden bg-sage">
      {/* DECORATIVE FLOWER */}
      <img
        src="/images/decorative-flower2.png"
        alt=""
        className="hidden lg:block absolute -right-20 top-0 h-full w-auto scale-125 opacity-20 pointer-events-none z-0"
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <img
              src="/images/about-us.jpg"
              alt="About Jardin des Rêves"
              className="w-full lg:h-150 object-cover rounded-lg"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            className="space-y-6"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h2 className="uppercase tracking-[0.2em] text-sm text-champagne">
              About Us
            </h2>

            <h3 className="font-cormorant text-5xl font-semibold leading-tight text-neutral">
              A Garden of Dreams,
              <br />
              Crafted with Love
            </h3>

            {/* DIVIDER */}
            <div className="flex items-center gap-3 my-8">
              <div className="w-12 h-px bg-champagne" />
              <div className="w-2 h-2 rounded-full bg-champagne" />
              <div className="w-12 h-px bg-champagne" />
            </div>

            <p className="leading-8 text-neutral">
              At{" "}
              <span className="font-cormorant font-semibold text-champagne">
                Jardin des Rêves
              </span>
              , we believe flowers are more than beautiful arrangements, they're
              expressions of love, gratitude, celebration, and remembrance.
            </p>

            <p className="leading-8 text-neutral">
              Inspired by the charm of European gardens and the poetry found in
              nature, each bouquet is thoughtfully designed using premium
              seasonal blooms, delicate textures, and harmonious color palettes.
            </p>

            <p className="italic font-cormorant text-xl text-champagne">
              "Because every beautiful moment deserves beautiful flowers."
            </p>

            {/* DIVIDER */}
            <div className="flex items-center gap-2 my-6">
              <div className="h-px w-12 bg-champagne" />
              <div className="w-2 h-2 rounded-full bg-champagne" />
              <div className="h-px w-12 bg-champagne" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
