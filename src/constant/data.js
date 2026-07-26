import { RiArrowRightLine } from "react-icons/ri"
import { FiTruck, FiPackage, FiShoppingCart } from "react-icons/fi";
import { GiFlowerPot } from "react-icons/gi";
import { PiLeaf } from "react-icons/pi";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
} from "react-icons/fa";
import { FiMail, FiPhone, FiClock } from "react-icons/fi";

export const navItems =[
        {id:1, name: "Home", link: "#home"},
        {id:2, name: "Shop", link: "#shop"},
        {id:3, name: "Collections", link: "#collections"},
        {id:4, name: "About", link: "#about"},
        {id:5, name: "Gift Guide", link: "#gift"},
        {id:6, name: "Contact", link: "#contact"},
];

export const productItems = [
  {
    id: 1,
    name: "Pearl Garden",
    price: "$68.00",
    image: "/images/bouquet1.jpg",
    rating: 5,
    reviews: 128,
    icon: FiShoppingCart,
  },
  {
    id: 2,
    name: "Lavender Dream",
    price: "$74.00",
    image: "/images/bouquet2.jpg",
    rating: 4,
    reviews: 94,
    icon: FiShoppingCart,
  },
  {
    id: 3,
    name: "Winter Noel",
    price: "$86.00",
    image: "/images/bouquet3.jpg",
    rating: 3,
    reviews: 76,
    icon: FiShoppingCart,
  },
];

export const categoryItems = [
  {
    id: 1,
    name: "Everyday Blooms",
    text: "Fresh floral arrangements designed to brighten ordinary days with effortless beauty.",
    image: "/images/product1.jpg",
    icon: RiArrowRightLine,
  },
  {
    id: 2,
    name: "Romantic Collection",
    text: "Soft roses, delicate peonies, and dreamy palettes created for anniversaries, proposals, and heartfelt gestures.",
    image: "/images/product2.jpg",
    icon: RiArrowRightLine,
  },
  {
    id: 3,
    name: "Celebration Flowers",
    text: "Celebrate birthdays, graduations, and life's meaningful milestones with vibrant handcrafted bouquets.",
    image: "/images/product3.jpg",
    icon: RiArrowRightLine,
  },
  {
    id: 4,
    name: "Sympathy & Remembrance",
    text: "Elegant floral tributes thoughtfully arranged to honor memories and offer comfort.",
    image: "/images/product4.jpg",
    icon: RiArrowRightLine,
  },
  {
    id: 5,
    name: "Seasonal Collection",
    text: "Limited-edition bouquets inspired by the changing seasons, featuring the freshest blooms available.",
    image: "/images/product5.jpg",
    icon: RiArrowRightLine,
  },
  {
    id: 6,
    name: "Luxury Signature Boxes",
    text: "Premium floral designs presented in elegant keepsake boxes for truly unforgettable gifting.",
    image: "/images/product6.jpg",
    icon: RiArrowRightLine,
  },
];

export const whyItems = [
  {
    icon: GiFlowerPot,
    title: "Fresh & Premium",
    text: "We source the freshest blooms daily.",
  },
  {
    icon: FiPackage,
    title: "Handcrafted",
    text: "Every arrangement is handmade with care.",
  },
  {
    icon: FiTruck,
    title: "Same-Day Delivery",
    text: "Reliable delivery when you need it most.",
  },
  {
    icon: PiLeaf,
    title: "Eco-Friendly",
    text: "Sustainable packaging for a better tomorrow.",
  },
];

export const footerSocials = [
  {
    icon: FaInstagram,
    name: "Instagram",
    url: "#",
  },
  {
    icon: FaFacebookF,
    name: "Facebook",
    url: "#",
  },
  {
    icon: FaPinterestP,
    name: "Pinterest",
    url: "#",
  },
  {
    icon: FaTiktok,
    name: "TikTok",
    url: "#",
  },
];


export const footerLinks = [
  {
    title: "Shop",
    links: [
      {
        name: "All Flowers",
        url: "#shop",
      },
      {
        name: "Signature Collections",
        url: "#collections",
      },
      {
        name: "Seasonal Arrangements",
        url: "#seasonal",
      },
      {
        name: "Gift Boxes",
        url: "#gift",
      },
      {
        name: "Wedding Flowers",
        url: "#wedding",
      },
    ],
  },
  {
    title: "Information",
    links: [
      {
        name: "About Us",
        url: "#about",
      },
      {
        name: "Delivery Information",
        url: "#delivery",
      },
      {
        name: "FAQs",
        url: "#faq",
      },
      {
        name: "Care Guide",
        url: "#care",
      },
      {
        name: "Contact Us",
        url: "#contact",
      },
    ],
  },
];


export const footerContact = [
  {
    icon: FiMail,
    text: "support@jardindesreves.com",
  },
  {
    icon: FiPhone,
    text: "(+63) 912 345 6789",
  },
  {
    icon: FiClock,
    text: "Monday–Saturday\n9:00 AM – 8:00 PM",
  },
];