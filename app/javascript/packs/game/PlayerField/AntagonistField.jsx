import React from "react";
import Deck from "./Components/Deck.jsx";

export const AntagonistField = () => {
  return (
    <div class="w-full h-full relative">
      <div class="absolute top-0 left-0">
        <Deck />
      </div>
    </div>
  );
};

export default AntagonistField;
