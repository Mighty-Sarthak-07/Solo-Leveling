import React from "react";
import AnimatedTitle from "./AnimatedTitle";

const WatchTrailer = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover z-0"
        src="/videos/system.mp4"
        type="video/mp4"
      ></video>
      
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      <div className="relative z-20 mt-12 w-full max-w-5xl px-4 text-center">
        <AnimatedTitle
          title="Sh<b>a</b>do<b>w</b><br>Mon<b>a</b>rch"
          className="special-font w-full font-zentry font-black leading-tight"
        />

        <div className="w-full aspect-video rounded-lg shadow-lg my-4">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Mgk5_MXodvY?si=cAoWsQ-0_C0QU4PR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WatchTrailer;