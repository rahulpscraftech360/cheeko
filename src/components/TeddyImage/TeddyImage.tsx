import React from "react";

export const TeddyImage = (): JSX.Element => {
  return (
    <div className="relative w-full">
      <img 
        src="/T-rex.png"
        alt="AI Teddy"
        className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto h-auto object-contain"
      />
    </div>
  );
};