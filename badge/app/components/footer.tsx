"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const redirectToTwitter = () => {
    router.push("https://x.com/OrioLMTD");
  };
  return (
    <footer className="footer bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <img className="size-16" src="orio.png" alt="Orio logo" />
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a onClick={redirectToTwitter}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
          </svg>
        </a>
      </nav>
    </footer>
  );
}
