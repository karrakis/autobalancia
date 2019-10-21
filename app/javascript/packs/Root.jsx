import React from "react";

import Game from "./game/Game.jsx";

export const Root = () => {
  return (
    <div class="w-screen h-screen bg-red-700 border-4 border-red-800 flex items-center justify-center">
      <div class="w-frame h-frame bg-orange-600 shadow-inner flex items-center justify-center">
        <Game />
      </div>
    </div>
  );
};

export default Root;
