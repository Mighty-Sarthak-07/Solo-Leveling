import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-xl uppercase">
        Welcome to Solo Leveling World
        </p>

        <AnimatedTitle
          title="Step Into the Sh<b>a</b>dows <br/> <b>U</b>nleash Your T<b>r</b>ue Power"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>The Hunt Begins—Your Life, Now an Endless Level-Up</p>
          <p className="text-gray-500">
          Solo Leveling unites hunters from all realms, blending power, danger, and destiny into one epic journey.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;