import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Why from "./components/Why";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Category from "./components/Category";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Category />
        <Why />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
