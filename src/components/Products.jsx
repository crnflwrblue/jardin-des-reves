import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { productItems } from "../constant/data.js";

const Products = () => {
  return (
    <section id="shop" className="py-24 bg-secondary-clr">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-sm text-tertiary-clr">
            Our Collection
          </p>

          <h2 className="font-cormorant font-semibold text-5xl mt-3">
            Signature Bouquets
          </h2>

          {/* DIVIDER */}
          <div className="flex justify-center items-center gap-3 mt-5 text-tertiary-clr">
            <div className="w-16 h-px bg-tertiary-clr" />
            ✿
            <div className="w-16 h-px bg-tertiary-clr" />
          </div>
        </div>

        <Swiper
          className="pb-12 products-slider"
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          speed={900}
          spaceBetween={25}
          slidesPerView={6}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {productItems.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="overflow-hidden rounded-xl bg-bgClr shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-96 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="font-cormorant font-semibold text-3xl">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed">{product.text}</p>

                  <button className="mt-6 flex items-center gap-2 text-sm uppercase tracking-widest">
                    Explore Collection
                    {product.icon && <product.icon className="text-lg" />}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Products;
