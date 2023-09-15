"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import Landing from "./sections/Landing";
import Featured from "./sections/Featured";
import Header from "./sections/Header";
import Footer from "./components/Footer";
import MovieDetails from "./sections/MovieDetails";

export default function Home() {
  return (
    <>
      <header>{/* <Header /> */}</header>
      <main className="relative">
        <Header />
        <Landing />
      </main>
      <section className="">
        <Featured />
      </section>
      <footer>
        <Footer />
      </footer>
      {/* <MovieDetails /> */}
    </>
  );
}
