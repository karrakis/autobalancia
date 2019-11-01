import React from "react";
import PlayerZone from "./PlayerZone.jsx";
import MiddleBar from "./MiddleBar.jsx";
import ProtagonistField from "./PlayerField/ProtagonistField.jsx";
import AntagonistField from "./PlayerField/AntagonistField.jsx";

export const Game = () => {
  return (
    <div className="w-frame h-frame bg-black flex flex-col">
      <PlayerZone>
        <AntagonistField />
      </PlayerZone>
      <MiddleBar />
      <PlayerZone>
        <ProtagonistField />
      </PlayerZone>
    </div>
  );
};

export default Game;
