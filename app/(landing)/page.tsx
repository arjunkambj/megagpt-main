import { redirect } from "next/navigation";
import { headers } from "next/headers";

import Hero from "./_components/Hero";
import Pricing from "./_components/Pricing";
import FAQ from "./_components/FAQ";
import Footer from "./_components/Footer";
import Features from "./_components/Features";
import NavMain from "./_components/Navbar";
import AosProvider from "./_components/AosProvider";
import VideoSection from "./_components/VideoSection";
import SectionDivider from "./_components/SectionDivider";

import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/dashboard");
  }

  return (
    <AosProvider>
      <main className="relative max-w-screen ">
        <NavMain />
        <VideoSection />
        <Hero />
        <SectionDivider />
        <Features />
        <SectionDivider />
        <Pricing />
        <SectionDivider />
        <FAQ />
        <Footer />
      </main>
    </AosProvider>
  );
}
