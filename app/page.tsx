"use client";

import EasterEgg from "@/components/EasterEgg";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Kosmico from "@/components/Kosmico";
import OpenSource from "@/components/OpenSource";
import Publications from "@/components/Publications";
import Sidebar from "@/components/Sidebar";

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <EasterEgg />
      <Sidebar />

      <main className="lg:ml-[260px] xl:ml-[280px] min-w-0">
        <div className="px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 max-w-content mx-auto w-full pt-14 lg:pt-0">
          <Hero />
          <Kosmico />
          <About />
          <Publications />
          <Experience />
          <OpenSource />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Home;
