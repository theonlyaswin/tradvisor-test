import Image from "next/image";
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Upcoming from './components/Upcoming'
import "./globals.css";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function Home() {
  return (
    <>
    <div className="logo-center"><Image src={`/Tradvisor-logo.png`} alt={"logo"} width="150" height="150" /></div>
    <Hero />
    <br/>
    <br/>
    <br/>
    <br/>
    <VelocityScroll
      text="Trade Like A Pro"
      default_velocity={5}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
    />
    <About />
    <Testimonials />
    <Gallery />
    <Upcoming />    
    <Contact />
    <Footer />
    </>
  );
}
