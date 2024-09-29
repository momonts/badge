"use client";

import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-slate-950 sticky top-0 z-20">
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
              <a>About</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
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
      <div className="navbar-center hidden lg:flex text-white">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="./">Home</a>
          </li>
          <li>
            <details>
              <summary>About</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Help</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
