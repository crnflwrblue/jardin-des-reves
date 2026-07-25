import React from "react";
import { footerSocials, footerLinks, footerContact } from "../constant/data";

const Footer = () => {
  return (
    <footer id="contact" className="">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* LOGO */}
          <div>
            <h2 className="text-3xl font-cormorant font-semibold">
              Jardin des Rêves
            </h2>

            <p className="mt-4 leading-7">
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
                  className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-tertiary-clr hover:text-secondary-clr transition"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* INFO */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold uppercase mb-4">{section.title}</h3>

              <ul className="space-y-3 ">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.url}
                      className="hover:text-tertiary-clr transition"
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
            <h3 className="font-semibold uppercase mb-4">Customer Care</h3>

            <div className="space-y-4 ">
              {footerContact.map((item, index) => (
                <p
                  key={index}
                  className="flex items-start gap-3 whitespace-pre-line"
                >
                  <item.icon className="mt-1" />
                  {item.text}
                </p>
              ))}
            </div>
          </div>

          {/* NEWSLETTER */}

          <div>
            <h3 className="font-semibold uppercase mb-4">Stay in Bloom</h3>

            <p className=" mb-4">
              Subscribe for floral inspiration, exclusive offers, and early
              access to new arrivals.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="youremail@email.com"
                className="border border-[#69765B] rounded-l-md px-4 py-3 w-full outline-none"
              />

              <button className="bg-tertiary-clr text-secondary-clr px-5 rounded-r-md hover:bg-[#69765B] transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-4 text-center text-sm">
          © 2026 Jardin des Rêves. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
