import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

export const AboutMeSection = (): JSX.Element => {
// Software icons data
const softwareIcons = [
    {
      src: "https://c.animaapp.com/mdct2fg6KskBPH/img/vector-2.svg",
      alt: "Vector",
  },
  {
      src: "https://c.animaapp.com/mdct2fg6KskBPH/img/group.png",
      alt: "Group",
  },
  {
      src: "https://c.animaapp.com/mdct2fg6KskBPH/img/icon-3.svg",
      alt: "Icon 3",
  },
  {
      src: "https://c.animaapp.com/mdct2fg6KskBPH/img/icon-2.svg",
      alt: "Icon 2",
  },
  {
      src: "https://c.animaapp.com/mdct2fg6KskBPH/img/icon-4.svg",
      alt: "Icon 4",
  },
  {
      src: "https://c.animaapp.com/mdct2fg6KskBPH/img/icon-1.svg",
      alt: "Icon 1",
  },
    {
      src: "https://c.animaapp.com/mdct2fg6KskBPH/img/icon-5.svg",
      alt: "Icon 5",
    },
    {
      src: "https://c.animaapp.com/mdct2fg6KskBPH/img/icon-5.svg",
      alt: "Icon 5",
    },
  ];

  return (
    <section className="relative w-full bg-[#a5b85d] overflow-hidden py-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[180vw] h-[80vh] top-1/4 left-1/2 -translate-x-1/2 rounded-full shadow-[inset_14px_4px_4px_-1px_#00000040,0px_4px_4px_#00000040] bg-gradient-to-b from-[#636e38] to-[#bfd46c] opacity-60" />
        <div className="absolute w-[40vw] h-[40vw] top-10 left-1/4 bg-[#eaec9b] rounded-full blur-3xl opacity-40" />
        <div className="absolute w-[70vw] h-[40vw] top-1/3 left-1/2 -translate-x-1/2 bg-[#2f4a26] rounded-full shadow-[inset_14px_4px_4px_-1px_#00000040,0px_4px_4px_#00000040] opacity-40" />
      </div>

      {/* About me label */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2.5 p-2.5 bg-[#b4c667] rounded-2xl rotate-6 shadow-md">
          <span className="font-bold text-white text-lg tracking-wide">About me</span>
        </div>
      </div>

      {/* Main content container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
            {/* Profile photo section */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/4">
          <div className="relative w-64 h-72 mb-4">
            <div className="absolute w-56 h-56 top-10 left-4 bg-[#efc03e] rounded-3xl shadow-lg" />
            <div className="absolute w-40 h-36 top-20 left-0 bg-[#fdf3df] rounded-3xl rotate-[-30deg] shadow-md" />
                <img
              className="absolute w-60 h-72 top-0 left-8 object-cover rounded-3xl"
              alt="Ashley Montero"
              src="https://c.animaapp.com/mdct2fg6KskBPH/img/photo.png"
                />
              </div>
          <div className="flex items-center justify-center bg-white/30 rounded-2xl shadow px-6 py-3">
            <span className="font-bold text-white text-2xl">Ashley Montero</span>
              </div>
            </div>

            {/* Bio and skills section */}
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="font-bold text-white text-3xl md:text-5xl leading-tight">
            Unlocking Efficiency <span className="block text-2xl md:text-4xl font-semibold text-[#eaeaea]">Empowering Success</span>
          </h2>
          <p className="text-[#eaeaea] text-lg md:text-2xl font-normal">
            I&apos;m Ashley, a skilled <span className="font-extrabold text-white">Virtual Assistant</span> with extensive expertise in <span className="font-extrabold">UI/UX Design, Social Media Management</span> and <span className="font-extrabold">Graphic Design</span>. Previously, I served as an <span className="font-extrabold">Executive Assistant</span> at FWD Life Insurance for two years, where I honed my organizational and administrative skills. My goal is to craft engaging content that truly connects with audiences and enhances brand presence.
                </p>

              {/* Skills cards */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <Card className="flex-1 flex flex-col items-start gap-4 px-6 py-5 bg-white/40 rounded-3xl backdrop-blur-md">
              <CardHeader className="p-0 w-full">
                <CardTitle className="font-bold text-white text-2xl md:text-3xl">SOFT SKILLS</CardTitle>
                  </CardHeader>
              <CardContent className="p-0 flex flex-col md:flex-row gap-4 w-full">
                <ul className="flex-1 text-black text-base md:text-lg font-medium list-disc list-inside">
                  <li>Team Work</li>
                  <li>Communication</li>
                  <li>Critical Thinking</li>
                </ul>
                <ul className="flex-1 text-black text-base md:text-lg font-medium list-disc list-inside">
                  <li>Adaptability</li>
                  <li>Problem Solving</li>
                  <li>Time Management</li>
                </ul>
                  </CardContent>
                </Card>
            <Separator className="hidden md:block w-px h-auto bg-white/30 mx-2" />
            <Card className="flex-1 flex flex-col items-start gap-4 px-6 py-5 bg-white/40 rounded-3xl backdrop-blur-md">
              <CardHeader className="p-0 w-full">
                <CardTitle className="font-bold text-white text-2xl md:text-3xl">LANGUAGE</CardTitle>
                  </CardHeader>
              <CardContent className="p-0 flex flex-col md:flex-row gap-4 w-full">
                <div className="flex-1 text-black text-lg font-medium">English</div>
                <div className="flex-1 text-black text-lg font-medium">Filipino</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Bottom cards section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 mt-16 px-4">
        <Card className="flex-1 flex flex-col items-center justify-center gap-8 py-8 px-6 bg-white/40 rounded-3xl backdrop-blur-md">
          <CardHeader className="p-0 w-full">
            <CardTitle className="font-bold text-white text-2xl md:text-3xl">CREATIVE FIELDS</CardTitle>
              </CardHeader>
          <CardContent className="p-0 flex flex-col md:flex-row gap-8 w-full">
            <ul className="flex-1 text-black text-lg font-medium list-disc list-inside">
              <li>Logo</li>
              <li>Brand Identity</li>
              <li>Book Keeping</li>
              <li>Posters</li>
              <li>Social Media Management</li>
            </ul>
            <ul className="flex-1 text-black text-lg font-medium list-disc list-inside">
              <li>UI/UX</li>
              <li>Wireframe</li>
              <li>Brochure / Flyers</li>
              <li>Menu</li>
              <li>Presentation</li>
              <li>Design Thinking</li>
              <li>Blogs</li>
            </ul>
              </CardContent>
            </Card>
        <Separator className="hidden md:block w-px h-auto bg-white/30 mx-2" />
        <Card className="flex-1 flex flex-col items-center justify-center gap-8 py-8 px-6 bg-white/40 rounded-3xl backdrop-blur-md">
          <CardHeader className="p-0 w-full">
            <CardTitle className="font-bold text-white text-2xl md:text-3xl">SOFTWARES</CardTitle>
              </CardHeader>
          <CardContent className="p-0 w-full">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 place-items-center">
              {softwareIcons.map((icon, index) => (
                <img
                  key={`software-icon-${index}`}
                  className="w-16 h-16 object-contain"
                  alt={icon.alt}
                  src={icon.src}
                />
                  ))}
                </div>
              </CardContent>
            </Card>
      </div>
    </section>
  );
};

export default AboutMeSection; 