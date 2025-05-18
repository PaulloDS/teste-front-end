import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Slide from "./components/Slider/Slide";
import { slides } from "./components/Slider/data/slides";
import TypesCards from "./components/TypesCards/TypesCards";

export default function Header() {
  return (
    <header>
      <Navbar />
      <section className="slider">
        {slides.map((slide: any, index: any) => (
          <Slide key={index} {...slide} />
        ))}
      </section>
      <section>
        <TypesCards />
      </section>
    </header>
  );
}
