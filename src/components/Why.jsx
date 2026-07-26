import React from "react";
import { whyItems } from "../constant/data";

const Why = () => {
  return (
    <section className="bg-lavender py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {whyItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-4 md:border-r last:border-r-0 border-champagne pr-5"
            >
              <div className="text-champagne flex-shrink-0">
                <item.icon size={30} />
              </div>

              <div>
                <h3 className="uppercase tracking-wider font-semibold text-sm text-dark">
                  {item.title}
                </h3>

                <p className="text-sm mt-2 text-gray">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
