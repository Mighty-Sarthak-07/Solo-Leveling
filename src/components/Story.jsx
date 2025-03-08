import { gsap } from "gsap";
import { useRef } from "react";

import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const element = frameRef.current;
    if (!element) return;

    const { clientX, clientY } = e;
    const rect = element.getBoundingClientRect();
    
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(frameRef.current, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  return (
    <div id="story" className="min-h-screen w-screen bg-black text-blue-50">
      <div className="flex flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          The Multiversal shadow World
        </p>

        <div className="relative w-full">
          <AnimatedTitle
            title="The T<b>a</b>le of <b>a</b> Forgotten Sh<b>a</b>dow Re<b>a</b>lm"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <video
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  src="/videos/entrance.mp4"
                  className="object-contain will-change-transform"
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
            Where Shadows Collide, Lies the Dual Dungeon
Uncover its mysteries, rise to power, and shape your destiny in a world full of endless challenges.
            </p>

            <Button id="realm-btn" title="Discover Prologue" containerClass="mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
