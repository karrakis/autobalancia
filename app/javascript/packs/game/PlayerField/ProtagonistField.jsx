import React from "react";
import Deck from "./Components/Deck.jsx";
import Hand from "./Components/Hand.jsx";
import Discard from "./Components/Discard.jsx";
import Card from "./Components/Card";
import Home from "../../images/homebridgethingy.jpg";

export const ProtagonistField = () => {
  return (
    <div
      className="w-full h-full flex items-end justify-left bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${Home})` }}
    >
      <div className="flex justify-start w-full">
        <Deck />
      </div>
      <div className="">
        <Hand>
          <Card />
          <Card />
          <Card />
        </Hand>
      </div>
      <div className="flex justify-end w-full">
        <Discard />
      </div>
    </div>
  );
};

export default ProtagonistField;
