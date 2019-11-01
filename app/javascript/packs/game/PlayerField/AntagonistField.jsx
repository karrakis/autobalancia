import React from "react";
import Deck from "./Components/Deck.jsx";
import Hand from "./Components/Hand.jsx";
import Discard from "./Components/Discard.jsx";
import Card from "./Components/Card";
import Wave from "../../images/The-Great-Wave-off-Kanagawa.jpg";

export const AntagonistField = () => {
  return (
    <div
      className="w-full h-full flex items-start justify-left bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${Wave})`
      }}
    >
      <div className="flex justify-start w-full">
        <Deck />
      </div>
      <div className="">
        <Hand>
          <Card />
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

export default AntagonistField;
