"use client";

import React from "react";

export default function Footer() {
  return (
    <div className="bg-slate-950 w-full flex-auto">
      <span>
        <p className="py-3 px-6 text-white">Powered By:&nbsp;</p>
      </span>
      <div className="w-48 pb-6 px-6">
        <img src="sollogo.png" alt="solana logo" />
      </div>
    </div>
  );
}
