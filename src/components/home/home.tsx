"use client";
import React, { useState, useEffect } from "react";
import Header from "../ui/header/header";
import Image from "next/image";
import cube from "@/public/cube.gif";

const colors = ["#FDFAE3", "#C6C8F9", "#E7E97C"];

export default function Home() {
  const [bgColor, setBgColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor((value) => {
        return value === 2 ? 0 : value + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: colors[bgColor] }}>
      <Header bgColor={bgColor} />
      <section
        className="flex flex-col min-h-screen items-center p-6"
        style={{ backgroundColor: colors[bgColor] }}
      >
        <div>
          <Image
            src={cube}
            width={381}
            height={381}
            alt="website logo"
            priority
          />
        </div>
        <span className="flex flex-col items-center gap-11 mb-20">
          <p className="text-5xl lg:text-7xl font-semibold text-center">
            Your journey starts here.
          </p>
          <p className="text-2xl font-normal text-center">
            This is your genZ guid into the world
          </p>
        </span>
        <div className="flex flex-row items-center justify-between gap-8">
          <button className="bg-black rounded-[48px] py-5 px-12">
            <p className="text-white text-xl font-semibold">Kick off project</p>
          </button>
          <button className="border border-black rounded-[48px] py-5 px-12">
            <p className="text-black text-xl font-semibold">Our Portfolio</p>
          </button>
        </div>
      </section>
    </div>
  );
}
