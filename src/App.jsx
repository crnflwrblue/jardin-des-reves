import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Category from "./components/Category";
import Why from "./components/Why";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

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
