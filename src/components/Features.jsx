import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import {Link} from "react-router-dom";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 4;
    const tiltY = (relativeX - 0.5) * -8;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-violet-800 font-bold"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Enter the Shadow Realm
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Immerse yourself in a world where hunters battle for survival, dungeons hold untold secrets, and power is earned through relentless growth. Rise beyond limits, command the Shadow Army, and carve your legacy as the ultimate hunter.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <Link to = {"/shadowsystem"}><BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              Sh<b>a</b>dow Syste<b>m</b>
            </>
          }
          description={
            <>
              <div className="text-yellow-500 font-bold">
                A cross-realm power that transforms every battle and quest into a path toward unstoppable growth.
              </div>
            </>
          }
        /></Link>
      </BentoTilt>

      <div className="grid h-auto w-full grid-cols-1 gap-7 md:grid-cols-2 md:grid-rows-3">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                Sh<b>a</b>dow <b>A</b>rchive
              </>
            }
            description="An anime and gaming-inspired collection, forging a legacy of power and evolution."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 w-full md:col-span-1">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                D<b>u</b>al D<b>u</b>ngeon
              </>
            }
            description="A perilous battleground where hunters face endless trials, forging strength through survival and conquest."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 w-full md:col-span-1">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                Ig<b>ri</b>s
              </>
            }
            description="A loyal knight of shadows—unwavering, relentless, and ever-ready to strike down your foes."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2 hidden md:block">
          <div className="flex size-full flex-col justify-between bg-violet-700 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2 row-span-1 w-full md:col-span-1">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;