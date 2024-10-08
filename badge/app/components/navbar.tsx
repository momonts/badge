"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="navbar bg-black sticky top-0 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-slate-950 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Account</a>
            </li>
            <li>
              <a>Help</a>
            </li>
          </ul>
        </div>
        <a>
          <img
            src="head.png"
            alt="Orio Head Logo"
            className="btn btn-ghost min-h-20"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex text-white">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/private">Dashboard</a>
          </li>
          <li>
            <a href="/account">Account</a>
          </li>
          <li>
            <a href="/business">Business</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-[2rem]">
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content w-12 rounded-full">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
