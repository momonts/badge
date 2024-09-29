"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PinContainer } from "./components/ui/3d-pin";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  const router = useRouter();
  const redirectToPrivate = () => {
    router.push("/private");
  };

  // Handle SSR hydration error
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render nothing or a loading spinner during SSR
    return null;
  }

  return (
    <main>
      <title>Orion | Welcome</title>
      <Navbar />
      <div className="text-white hero min-h-screen bg-stone-900">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="h-[40rem] w-full flex items-center justify-center">
            <div onClick={redirectToPrivate} className="cursor-pointer">
              <PinContainer title="Get Started">
                <img
                  src="hero.png"
                  alt="Hero"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
              </PinContainer>
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">
              <span className="text-teal-400">Limit&nbsp;</span>for limitless
              possibilities.
            </h1>
            <p className="py-6">
              Implementing a blockchain-based system for transparent tracking
              and verification to ensure fair distribution and mitigate hoarding
              and scalping.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
