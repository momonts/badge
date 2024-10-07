"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PinContainer } from "./components/ui/3d-pin";
import Footer from "./components/footer";
import { Modal, ModalTrigger } from "./components/ui/animated-modal";

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
      <div className="navbar bg-black sticky top-0 z-20">
        <div className="navbar-start">
          <div className="dropdown">
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-slate-950 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
            >
              <li></li>
              <li>
                <ul className="p-2">
                  <li></li>
                  <li></li>
                </ul>
              </li>
              <li></li>
            </ul>
          </div>
          <a href="./">
            <img
              src="head.png"
              alt="Orio Head Logo"
              className="btn btn-ghost min-h-20"
            />
          </a>
        </div>

        <div className="navbar-end mr-[2rem]">
          <div onClick={redirectToPrivate}>
            <Modal>
              <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 text-slate-950 font-semibold">
                  Get Started
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                  ✍️
                </div>
              </ModalTrigger>
            </Modal>
          </div>
        </div>
      </div>

      <title>Orion | Welcome</title>
      <div className="text-white hero min-h-screen bg-neutral-950">
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
              Revolutionizing concert experience, and providing scalping
              solution.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

const PlaneIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
    </svg>
  );
};
