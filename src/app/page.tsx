import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import GreenBanner from "@/components/GreenBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Process />
        <Stats />
        <GreenBanner />
      </main>
      <Footer />
    </>
  );
}
