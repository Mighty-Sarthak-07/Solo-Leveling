import React, { useState, useEffect } from "react";
import { FaHeart, FaBrain } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShadowSystem = () => {
  const [stats, setStats] = useState({
    level: 18,
    title: "Wolf Assassin",
    job: "None",
    hp: 2220,
    maxHp: 2220,
    mp: 350,
    maxMp: 350,
    fatigue: 0,
    strength: 48,
    agility: 27,
    perception: 27,
    vitality: 27,
    intelligence: 27,
    availablePoints: 12,
  });

  useEffect(() => {
    const savedPoints = localStorage.getItem("availablePoints");
    if (savedPoints) {
      setStats((prevStats) => ({
        ...prevStats,
        availablePoints: parseInt(savedPoints, 10),
      }));
    }
  }, []);


  const increaseStat = (stat) => {
    if (stats.availablePoints > 0) {
      setStats({
        ...stats,
        [stat]: stats[stat] + 1,
        availablePoints: stats.availablePoints - 1,
      });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-blue-400">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/system.mp4" 
        type="video/mp4"
      ></video>
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative bg-black bg-opacity-20 text-blue-400 p-6 rounded-lg neon-border shadow-lg lg:w-[50%] w-[85%] mx-auto border border-blue-500">
        <h1 className="text-3xl font-bold text-center mb-4">Shadow System</h1>
        <div className="flex items-center justify-between mt-6 border-t border-blue-500 pt-4">
        <div className="flex items-center space-x-2 py-5 w-1/2 ml-4">
            <FaHeart className="text-red-600 md:text-lg text-md" />
            <div className="relative w-full h-5 bg-red-500 rounded-full overflow-hidden border text-red-600">
              <div 
                className="absolute top-0 left-0 h-full text-red-600 transition-all duration-300 flex flex-col"
                style={{ width: `${(stats.hp / stats.maxHp) * 100}%` }}
              > <span className="text-[0.60rem] md:text-sm px-2 font-bold text-black">{stats.hp}/{stats.maxHp}</span></div>
            </div>
           
          </div>

          <div className="flex items-center space-x-2 py-5 w-1/2 ml-4">
            <FaBrain className="text-blue-400 md:text-lg text-md" />
            <div className="relative w-full h-5 bg-gray-900 rounded-full overflow-hidden border border-blue-500">
              <div 
                className="absolute top-0 left-0 h-full bg-blue-400 transition-all duration-300 flex flex-col"
                style={{ width: `${(stats.mp / stats.maxMp) * 100}%` }}
              > <span className="text-[0.60rem] md:text-sm px-2 font-bold text-black">{stats.mp}/{stats.maxMp}</span></div>
            </div>
           
          </div>

          <p className="ml-4 text-md text-center font-extrabold  text-gray-400">Fatigue: {stats.fatigue}</p></div>
      

        <div className="mt-4 border-t border-blue-500 pt-4"> 
           <p className="mt-4 text-center text-lg font-bold text-yellow-400">
          Available Skill Points: {stats.availablePoints}
        </p>
          {Object.entries(stats).map(([key, value]) =>
            ["strength", "agility", "perception", "vitality", "intelligence"].includes(key) ? (
              <div key={key} className="flex justify-between items-center mb-2">
                <p className="capitalize">{key}: <span className="text-blue-300">{value}</span></p>
                <button
                  onClick={() => increaseStat(key)}
                  className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded text-sm"
                  disabled={stats.availablePoints === 0}
                >
                  +
                </button>
              </div>
            ) : null
          )}
        </div>

        <div className="text-center">
          <Link to={"/shadowgame"}>
            <button className="text-black mt-3 rounded-xl p-2 border-2 font-circular-web font-bold bg-blue-300">
              Earn More Points
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShadowSystem;
