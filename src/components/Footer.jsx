import React from "react";
import { footerSocials, footerLinks, footerContact } from "../constant/data";
import { motion } from "framer-motion";
import { fadeUp } from "../motion/animation";

const Footer = () => {
  return (
    <footer id="contact" className="bg-neutral">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-10"
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {/* NEWSLETTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-center">
          <div className="">
            <h3 className="font-cormorant text-4xl font-semibold mb-2 text-champagne">
              Stay in Bloom
            </h3>

            <p className="text-gray">
              Subscribe for floral inspiration, exclusive offers, and early
              access to new arrivals.
            </p>
          </div>

          <div className="flex items-center">
            <div className="flex w-full">
              <input
                type="email"
                placeholder="youremail@email.com"
                className="border border-gray/30 bg-neutral/10 text-gray placeholder:text-gray/50 rounded-l-md px-4 py-3 w-full outline-none"
              />

              <button className="bg-lavender text-white px-5 rounded-r-md hover:bg-champagne hover:text-dark transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <motion.div
          className=" border-t border-gray/20 mt-4 pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* LOGO */}
          <div>
            <h2 className="text-4xl font-cormorant font-semibold">
              Jardin des Rêves
            </h2>

            <p className="mt-4 leading-7 text-gray">
              Elegant floral arrangements handcrafted for life's most meaningful
              moments.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-3 mt-6">
              {footerSocials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full text-blush border border-blush/40 flex items-center justify-center hover:bg-blush hover:text-neutral transition"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* INFO */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold uppercase mb-4 text-champagne">
                {section.title}
              </h3>

              <ul className="space-y-3 ">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.url}
                      className="text-gray hover:text-blush transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CONTACT */}

          <div>
            <h3 className="font-semibold uppercase mb-4 text-champagne">
              Customer Care
            </h3>

            <div className="space-y-4 ">
              {footerContact.map((item, index) => (
                <p
                  key={index}
                  className="flex items-start gap-3 whitespace-pre-line text-gray"
                >
                  <item.icon className="mt-1" />
                  {item.text}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-4 pt-2 text-center text-sm text-gray"
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          © 2026 Jardin des Rêves. All Rights Reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
