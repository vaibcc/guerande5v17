import React from "react";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import QuickStats from "@/components/site/QuickStats";
import About from "@/components/site/About";
import Results from "@/components/site/Results";
import Ranking from "@/components/site/Ranking";
import Calendar from "@/components/site/Calendar";
import Team from "@/components/site/Team";
import CaptainFeature from "@/components/site/CaptainFeature";
import Club from "@/components/site/Club";
import Federation from "@/components/site/Federation";
import Gallery from "@/components/site/Gallery";
import TeamSpirit from "@/components/site/TeamSpirit";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0F0D]">
      <Header />
      <main>
        <Hero />
        <QuickStats />
        <About />
        <Results />
        <Ranking />
        <Calendar />
        <Team />
        <CaptainFeature />
        <Club />
        <Federation />
        <Gallery />
        <TeamSpirit />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}