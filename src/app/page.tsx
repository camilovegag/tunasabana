import Hero from "@/components/hero";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import GalleryPreview from "@/components/sections/gallery-preview";
import History from "@/components/sections/history";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <History />
      <GalleryPreview />
      <Testimonials />
      <Contact />
    </>
  );
}
