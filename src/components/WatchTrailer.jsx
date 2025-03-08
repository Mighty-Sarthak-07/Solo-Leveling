import React from "react";
import AnimatedTitle from "./AnimatedTitle";

const WatchTrailer = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full bg-black">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/system.mp4"
        type="video/mp4"
      ></video>
      
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      <div className="relative z-20 w-full max-w-7xl px-4">
      <AnimatedTitle
            title="Sh<b>a</b>do<b>w</b>&nbspMon<b>a</b>rch"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />
        <iframe
          className="w-full h-[250px] my-2 md:h-[450px] lg:h-[700px] rounded-lg shadow-lg  "
          src="https://www.youtube.com/embed/Mgk5_MXodvY?si=cAoWsQ-0_C0QU4PR"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchTrailer;