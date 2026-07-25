import React from "react";

const CTA = () => {
  return (
    <section className="bg-tertiary-clr relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 py-20 z-10">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-5xl text-secondary-clr font-semibold font-cormorant leading-tight">
              Send a Little Piece
              <br />
              of Paradise
            </h2>
          </div>

          <div>
            <p className="text-secondary-clr/90 mb-8 leading-7">
              Whether it's a grand celebration or a simple "thinking of you,"
              let our flowers speak the words that matter most.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-secondary-clr text-tertiary-clr px-7 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                Order Your Bouquet
              </button>

              <button className="border border-bgClr text-bgClr px-7 py-3 rounded-md hover:bg-bgClr hover:text-primary-clr transition">
                Browse Collections
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DECORATIVE FLOWER */}
      <img
        src="/images/decorative-flower1.png"
        alt=""
        className="absolute -right-20 -bottom-20 w-[450px] opacity-20 pointer-events-none z-0"
      />
    </section>
  );
};

export default CTA;
