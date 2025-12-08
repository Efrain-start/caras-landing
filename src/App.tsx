import React from "react";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Features } from "./components/Features/Features";
import { Covers } from "./components/Covers/Covers";
import { Footer } from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Covers />
      <Footer />
    </>
  );
};

export default App;
