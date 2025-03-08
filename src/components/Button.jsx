import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
  const hoverSoundRef = useRef(null);
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  useEffect(() => {
    hoverSoundRef.current = new Audio("/audio/hovering.mp3");
    const enableAudio = () => {
      setIsUserInteracted(true);
      document.removeEventListener("click", enableAudio);
    };

    document.addEventListener("click", enableAudio);
    return () => document.removeEventListener("click", enableAudio);
  }, []);

  const playHoverSound = () => {
    if (isUserInteracted && hoverSoundRef.current) {
      hoverSoundRef.current.currentTime = 0;
      hoverSoundRef.current.play().catch((error) => console.log("Audio play error:", error));
    }
  };

  return (
    <button
      id={id}
      onMouseEnter={playHoverSound}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
        containerClass
      )}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  );
};

export default Button;