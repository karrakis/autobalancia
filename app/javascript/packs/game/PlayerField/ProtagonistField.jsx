import React from "react";
import Deck from "./Components/Deck.jsx";

export const ProtagonistField = () => {
  return (
    <div class="w-full h-full relative">
      <div class="absolute bottom-0 left-0">
        <Deck />
      </div>
    </div>
  );
};

export default ProtagonistField;
