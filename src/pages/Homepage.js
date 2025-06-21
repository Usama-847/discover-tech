"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import HeroSection from "../components/Homepage/HeroSection";
import PartnersSection from "../components/Homepage/PartnersSection";
import EmpoweringLeaders from "../components/Homepage/EmpoweringLeaders";
import FlagshipTrainings from "../components/Homepage/FlagshipTrainings";

export default function Homepage() {
  const router = useRouter();

  const handleStartJourney = () => {
    router.push("/bootcamp");
  };

  return (
    <div>
      <Head>
        <title>Home - Discover Tech</title>
        <meta name="description" content="Welcome to our company homepage" />
      </Head>

      <main className="mx-auto min-h-screen">
        {/* Hero Section with Spline */}
        {/* <HeroSection onStartJourney={handleStartJourney} /> */}

        {/* Partners Logo Section - Full Width */}
        <PartnersSection />

        {/* Empowering Leaders Section */}
        <EmpoweringLeaders />

        {/* Browse Our Flagship Trainings Section */}
        <FlagshipTrainings onStartJourney={handleStartJourney} />
      </main>
    </div>
  );
}
