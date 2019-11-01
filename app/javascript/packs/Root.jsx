import React from "react";

import Game from "./game/Game.jsx";

export const Root = () => {
  return (
    <div className="w-screen h-screen bg-gray-800 flex items-center justify-center">
      <div className="w-frame h-frame bg-green-600 shadow-inner flex items-center justify-center">
        <Game />
      </div>
    </div>
  );
};

export default Root;
