import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GRID_SIZE = 5; 
const CHANCE_OF_shadow = 0.3; 
const MAX_ATTEMPTS = 5;

const ShadowGame = () => {
  const [grid, setGrid] = useState(Array(GRID_SIZE * GRID_SIZE).fill(null));
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedPoints = localStorage.getItem("totalPoints");
    if (!savedPoints) {
      localStorage.setItem("totalPoints", "0");
    }
  }, []);

  const handleTileClick = (index) => {
    if (grid[index] !== null || gameOver) return;

    if (attempts >= MAX_ATTEMPTS - 1) {
      setGameOver(true); 
    }

    const hasshadow = Math.random() < CHANCE_OF_shadow;
    const newGrid = [...grid];
    newGrid[index] = hasshadow ? "shadow" : "❌";

    setGrid(newGrid);
    setAttempts(attempts + 1);

    if (hasshadow) {
      setScore(score + 1);
    }
  };

  const handleGameEnd = () => {
    const totalPoints = parseInt(localStorage.getItem("totalPoints"), 10) || 0;
    const newTotalPoints = totalPoints + score;
    localStorage.setItem("totalPoints", newTotalPoints.toString());
    navigate("/shadowsystem");
  };

  return (
    <div className="flex flex-col items-center p-5  bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4 mt-32">Shadow Collection Game</h1>
      <p className="mb-2 text-lg">Score: {score}</p>
      <p className="mb-2 text-lg">
        Attempts: {attempts} / {MAX_ATTEMPTS}
      </p>

      {gameOver ? (
        <div className="text-center mt-4">
          <p className="text-red-500 text-lg font-bold">Game Over!</p>
          <button
            onClick={handleGameEnd}
            className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg"
          >
            Add Score & Return
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-2 p-4 border border-yellow-500 rounded-lg">
          {grid.map((item, index) => (
            <button
              key={index}
              className="w-16 h-16 flex items-center justify-center bg-gray-700 rounded-lg text-2xl hover:bg-gray-600 transition-all"
              onClick={() => handleTileClick(index)}
            >
              {item === "shadow" ? (
                <img
                  src="https://i.pinimg.com/originals/90/2b/68/902b6875a8aa7d172093616993b69bf8.png"
                  alt="shadow"
                  className="w-10 h-10"
                />
              ) : (
                item
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShadowGame;
