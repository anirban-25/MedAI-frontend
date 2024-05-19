"use client";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="bg-white py-4 shadow-lg">
      <div className="hidden md:mx-10 md:flex md:justify-between ">
        <Link
          href="/"
          className=" font-extrabold text-3xl text-gray-100 flex align-center mb-5 mt-2"
        >
          <div class="flex items-center space-x-2">
            <button>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3845/3845868.png"
                alt="Logo"
                class=" w-6 md:w-9 mx-2"
              />
            </button>
          </div>
          <div className="drop-shadow-md text-xl text-[#202123]  md:text-3xl cursor-pointer">
            MedAI
          </div>
        </Link>
        <div class="sm:px-12 flex items-center justify-between  ">
          <div className="hidden md:flex">
            <div className=" flex space-x-4 ">
              <div className="hover:bg-slate-500 hover:bg-opacity-10 rounded-md text-slate-800 font-semibold hover:text-slate-700 text-lg text-bold flex p-2 transition hover:shadow-lg">
                <a href="/">Home</a>
              </div>
              <div className="hover:bg-slate-500 hover:bg-opacity-10 rounded-md text-slate-800 font-semibold hover:text-slate-700 text-lg text-bold flex p-2 transition hover:shadow-lg">
                <button onClick={()=>{}}>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden flex justify-center mt-10 font-bold text-3xl text-slate-800">
        <div>
          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3845/3845868.png"
              alt="Logo"
              class=" w-6 md:w-9 mx-2"
            />
          </button>
        </div>
        MedAI
      </div>
    </div>
  );
}

export default Header;
