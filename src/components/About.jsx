import React from "react";

const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* DECORATIVE FLOWER */}
      <img
        src="/images/decorative-flower2.png"
        alt=""
        className="hidden lg:block absolute -right-20 top-0 h-full w-auto scale-125 opacity-20 pointer-events-none z-0"
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <div>
            <img
              src="/images/about-us.jpg"
              alt="About Jardin des Rêves"
              className="w-full h-150 object-cover rounded-lg"
            />
          </div>

          {/* CONTENT */}
          <div className="space-y-6">
            <h2 className="uppercase tracking-[0.2em] text-sm text-tertiary-clr">
              About Us
            </h2>

            <h3 className="font-cormorant text-5xl font-semibold leading-tight">
              A Garden of Dreams,
              <br />
              Crafted with Love
            </h3>

            {/* DIVIDER */}
            <div className="flex items-center gap-3 my-8">
              <div className="w-12 h-px bg-tertiary-clr" />
              <div className="w-2 h-2 rounded-full bg-tertiary-clr" />
              <div className="w-12 h-px bg-tertiary-clr" />
            </div>

            <p className="leading-8">
              At{" "}
              <span className="font-cormorant font-semibold">
                Jardin des Rêves
              </span>
              , we believe flowers are more than beautiful arrangements, they're
              expressions of love, gratitude, celebration, and remembrance.
            </p>

            <p className="leading-8">
              Inspired by the charm of European gardens and the poetry found in
              nature, each bouquet is thoughtfully designed using premium
              seasonal blooms, delicate textures, and harmonious color palettes.
            </p>

            <p className="italic font-cormorant text-xl">
              "Because every beautiful moment deserves beautiful flowers."
            </p>

            {/* DIVIDER */}
            <div className="flex items-center gap-2 my-6">
              <div className="h-px w-12 bg-tertiary-clr" />
              <div className="w-2 h-2 rounded-full bg-tertiary-clr" />
              <div className="h-px w-12 bg-tertiary-clr" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
