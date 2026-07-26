import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { categoryItems } from "../constant/data.js";

const Category = () => {
  return (
    <section id="collections" className="py-24 scroll-mt-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-sm text-blush">
            COLLECTIONS
          </p>

          <h2 className="font-cormorant font-semibold text-5xl mt-3 text-dark">
            Shop by Collection
          </h2>

          {/* DIVIDER */}
          <div className="flex justify-center items-center gap-3 mt-5 text-blush">
            <div className="w-16 h-px bg-blush" />
            ✿
            <div className="w-16 h-px bg-blush" />
          </div>

          <p className="mt-6 max-w-xl mx-auto leading-7 text-gray">
            Discover thoughtfully curated floral collections for every
            celebration, season, and heartfelt moment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryItems.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl border border-sage/20 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl "
            >
              {/* IMAGE */}
              <div className="aspect-4/5 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-dark/70 via-dark/20 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-6 text-neutral">
                <p className="uppercase tracking-[0.25em] text-xs text-champagne">
                  Collection
                </p>

                <h3 className="font-cormorant text-3xl font-semibold mt-2 text-neutral">
                  {category.name}
                </h3>

                <p className="mt-2 text-neutral/90 leading-6">
                  {category.text}
                </p>

                <button className="mt-5 flex items-center gap-2 uppercase tracking-widest text-xs text-champagne hover:text-blush transition-colors">
                  Explore
                  <RiArrowRightLine />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
