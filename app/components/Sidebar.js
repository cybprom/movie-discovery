import Link from "next/link";
import React from "react";

export default function Sidebar({ isFloatingMenuOpen, id }) {
  return (
    <>
      <div
        className={
          isFloatingMenuOpen
            ? "sidebarContainerOpen"
            : `sticky top-0 left-0 md:w-[230px] h-screen overflow-hidden rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none border border-solid border-[#0000004d] py-3`
        }
        // className="sticky w-[230px] h-screen overflow-hidden rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none border border-solid border-[#0000004d] py-3"
      >
        <div className="sidebarHeader px-3 flex items-center gap-4">
          <img src="/tv.svg" />
          <p className="hidden md:flex font-bold text-2xl text-[#333333]">
            MovieBox
          </p>
        </div>

        <nav className="h-full flex flex-col items-center justify-center">
          <Link
            href="/"
            className="h-[86px] md:w-[220px] flex items-center px-5 gap-5 py-10 my-1 text-[#666666] hover:bg-[#be123c1a] hover:cursor-pointer hover:border-r-[5px] hover:border-solid hover:text-[#be123c] hover:transition hover:border-[#be123de3]"
          >
            <img src="/Home.svg" alt="" />
            <p className="hidden md:flex font-semibold text-xl">Home</p>
          </Link>
          <Link
            // href="/"
            href={`/movies/${id}`}
            className="h-[86px] md:w-[220px] flex items-center px-5 gap-5 py-10 my-1 text[#666666] hover: bg-[#be123c1a] hover:cursor-pointer hover: border-r-[5px] hover: border-solid hover: text-[#be123c] hover:transition hover: border-[#be123de3]"
          >
            <img src="/MovieProjector.svg" alt="" />
            <p className="hidden md:flex font-semibold text-xl">Movies</p>
          </Link>
          <Link
            href="/"
            className="h-[86px] md:w-[220px] flex items-center px-5 gap-5 py-10 my-1 text-[#666666] hover:bg-[#be123c1a] hover:cursor-pointer hover:border-r-[5px] hover:border-solid hover:text-[#be123c] hover:transition hover:border-[#be123de3]"
          >
            <img src="/TVshow.svg" alt="" />
            <p className="hidden md:flex font-semibold text-xl">TV Series</p>
          </Link>
          <Link
            href="/"
            className="h-[86px] md:w-[220px] flex items-center px-5 gap-5 py-10 my-1 text-[#666666] hover:bg-[#be123c1a] hover:cursor-pointer hover:border-r-[5px] hover:border-solid hover:text-[#be123c] hover:transition hover:border-[#be123de3]"
          >
            <img src="/Calendar.svg" alt="" />
            <p className="hidden md:flex font-semibold text-xl">Upcoming</p>
          </Link>

          <div className="playing hidden md:flex  flex-col justify-center items-center my3 px-5 gap-3 bg-[#f8e7eb66] w-[170px] h-[210px] rounded-2xl border border-solid border-[#be123cb2]">
            <p className=" font-semibold text-base w-[137px]">
              Play movie quizes and earn free tickets
            </p>

            <p className=" text-xs font-medium w-[139px]">
              50k people are playing now
            </p>

            <button className=" rounded-3xl bg-[#be123c33] text-[#be123c] text-xs font-medium w-[112px] h-[30px] border-none ">
              start playing
            </button>
          </div>

          <Link href={`/`} className="flex items-center py-5">
            <img src="/Logout.svg" alt="" />
            <p className="hidden md:flex">Log Out</p>
          </Link>
        </nav>
      </div>
    </>
  );
}
