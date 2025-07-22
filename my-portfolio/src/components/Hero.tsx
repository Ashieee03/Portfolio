import { Button } from "./ui/button";
import React from "react";

export default function HeroSection(): JSX.Element {
  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-[#030e02] overflow-hidden pt-32" id="home">
      {/* Background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-[1539px] top-[42px] left-0 rounded-[1179.5px/769.5px] shadow-[inset_14px_4px_4px_-1px_#00000040,0px_4px_4px_#00000040] [background:radial-gradient(50%_50%_at_62%_45%,rgba(2,13,2,1)_38%,rgba(143,255,143,0.16)_100%),linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(191,212,108,1)_100%)]" />

        {/* Glow effects */}
        <div className="absolute w-[1027px] h-[1027px] top-0 right-0 bg-[#636e3880] rounded-[513.5px] blur-[77.8px]" />
        <div className="absolute w-[258px] h-[258px] bottom-1/4 left-1/4 bg-[#636e3880] rounded-[129px] blur-[77.8px]" />
        <div className="absolute w-[258px] h-[259px] bottom-0 left-1/2 bg-[#eaec9b66] rounded-[129px/129.5px] blur-[77.8px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto px-4">
        {/* Main content */}
        <div className="flex flex-col items-center justify-center w-full text-center mb-8">
          <h2 className="font-normal italic text-white text-[28px] tracking-[0] mb-4">
            HELLO I&apos;M ASHLEY
          </h2>

          <h1 className="text-6xl font-bold text-white mb-12">
            SMM, <span className="text-gray-400">UI/UX</span>
            <br />
            <span className="text-gray-500">DESIGNER</span>
          </h1>

          {/* Portfolio showcase - 75% width, images closer together */}
          <div className="relative w-3/4 max-w-[75vw] h-[400px] mx-auto mt-6 flex items-center justify-center">
            {/* Central Mac monitor */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <img
                className="w-[320px] h-auto"
                alt="Mac Studio"
                src="/images/hero-section/mac.png"
              />
            </div>
            {/* Left iPhone */}
            <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[120px] h-auto rotate-[-13deg] z-10">
              <img
                className="w-full h-auto"
                alt="iPhone 1"
                src="/images/hero-section/iphone1.png"
              />
            </div>
            {/* Right iPhone */}
            <div className="absolute right-[25%] top-1/2 -translate-y-1/2 w-[120px] h-auto rotate-[5deg] z-10">
              <img
                className="w-full h-auto"
                alt="iPhone 2"
                src="/images/hero-section/iphone2.png"
              />
            </div>
            {/* Top left portfolio piece */}
            <div className="absolute left-[13%] top-2 w-[100px] h-[100px] rotate-[-8deg] z-30">
              <img
                className="w-full h-full object-cover"
                alt="Portfolio 1"
                src="/images/hero-section/Portfolio1.png"
              />
            </div>
            {/* Top right portfolio piece */}
            <div className="absolute right-[13%] top-10 w-[130px] h-[130px] rotate-[8deg] z-40">
              <img
                className="w-full h-full object-cover"
                alt="Portfolio 2"
                src="/images/hero-section/Portfolio2.png"
              />
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-8">
          <div className="flex items-center justify-center gap-8 px-12 py-5 rounded-[90px] backdrop-blur-[15px] bg-[linear-gradient(90deg,rgba(217,217,217,0.1)_0%,rgba(115,115,115,0.2)_100%)] shadow-lg">
            <Button
              variant="link"
              className="text-[#fbbc05] font-medium text-base h-auto"
            >
              See My Works
            </Button>
            <Button
              variant="link"
              className="text-white font-medium text-base h-auto"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 