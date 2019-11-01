import React from "react";

export const Hand = props => {
  return (
    <div className="h-32 w-hand bg-red-800 flex justify-around">
      {props.children}
    </div>
  );
};

export default Hand;
