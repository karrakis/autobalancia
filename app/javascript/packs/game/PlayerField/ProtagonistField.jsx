import React from "react";
import Deck from "./Components/Deck.jsx";
import Hand from "./Components/Hand.jsx";
import Discard from "./Components/Discard.jsx";
import Card from "./Components/Card";

export const ProtagonistField = () => {
  return (
    <div class="w-full h-full flex items-end justify-left">
      <div class="flex justify-start w-full">
        <Deck />
      </div>
      <div class="">
        <Hand>
          <Card />
          <Card />
          <Card />
        </Hand>
      </div>
      <div class="flex justify-end w-full">
        <Discard />
      </div>
    </div>
  );
};

export default ProtagonistField;
