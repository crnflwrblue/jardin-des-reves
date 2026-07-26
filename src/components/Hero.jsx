import React from "react";

const Hero = () => {
  return (
    <section id="home">
      <div className="relative h-screen">
        {/* BACKGROUND IMAGE */}
        <img
          src="/images/hero-background.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark/40" />

        {/* CONTENT */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-neutral text-center max-w-2xl px-6 space-y-6">
            <p className="uppercase tracking-[0.3em] text-champagne">
              Every Bloom Tells a Story
            </p>
            <h1 className="font-cormorant font-semibold text-6xl lg:text-8xl text-neutral">
              Jardin des Rêves
            </h1>
            <p className="leading-8 text-neutral/90">
              Handcrafted floral arrangements inspired by nature's quiet
              elegance. From heartfelt celebrations to everyday moments, our
              blooms are thoughtfully curated to bring beauty, warmth, and
              lasting memories into every space.
            </p>

            {/* BUTTON */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button className="primary-btn">Shop Collection</button>{" "}
              <button className="secondary-btn">Build Your Bouquet</button>
            </div>

            <p className="flex justify-center items-center gap-4 text-sm uppercase tracking-[0.2em] text-neutral/80">
              <span>Fresh Flowers</span>
              <span className="text-champagne">✿</span>
              <span>Artisan Arrangements</span>
              <span className="text-champagne">✿</span>
              <span>Same-Day Delivery</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
