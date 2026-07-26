import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaRegStar } from "react-icons/fa";

import { productItems } from "../constant/data.js";

const Products = () => {
  return (
    <section id="shop" className="py-24 bg-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-sm text-blush">
            BEST SELLERS
          </p>

          <h2 className="font-cormorant font-semibold text-5xl mt-3 text-dark">
            Signature Bouquets
          </h2>

          {/* DIVIDER */}
          <div className="flex justify-center items-center gap-3 mt-5 text-blush">
            <div className="w-16 h-px bg-blush" />
            ✿
            <div className="w-16 h-px bg-blush" />
          </div>
        </div>

        <Swiper
          className="products-slider"
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
            <SwiperSlide key={product.id} className="pb-12">
              <div className="group overflow-hidden rounded-xl bg-white shadow-sm">
                <div className="aspect-4/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-cormorant text-2xl font-semibold text-blush">
                        {product.name}
                      </h3>

                      <p className="mt-1 font-medium text-sage">
                        {product.price}
                      </p>

                      <div className="mt-2 flex items-center gap-1">
                        {[...Array(5)].map((_, index) =>
                          index < product.rating ? (
                            <FaStar key={index} className="text-champagne" />
                          ) : (
                            <FaRegStar key={index} className="text-gray/40" />
                          ),
                        )}
                        <span className="ml-1 text-gray">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>

                    <button className="flex mt-2 h-9 w-9 items-center justify-center rounded-full bg-sage text-neutral hover:bg-dark transition hover:scale-110">
                      <product.icon size={18} />
                    </button>
                  </div>
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
