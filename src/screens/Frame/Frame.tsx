import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Frame = (): JSX.Element => {
  return (
    <div className="relative w-full  h-[460px] bg-[#ff6b01] mt-6">
      <Card className="border-none shadow-none bg-transparent">
        <CardContent className="flex flex-col items-center gap-3 absolute top-[60px] left-0 right-0 mx-auto w-[340px] p-0">
          <div className="flex flex-col items-center justify-center gap-1 w-full">
            <h1 className="w-full mt-[-1.00px] [font-family:'Clash_Display-Bold',Helvetica] font-bold text-white text-[32px] text-center tracking-[0] leading-normal">
              Meet Our Exciting AI-Powered Toys
            </h1>

            <p className="w-full [font-family:'Nunito_Sans',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-normal">
              Discover a world of fun and learning with Cheeko&#39;s innovative
              AI toys. Each toy is designed to spark creativity and engage your
              child&#39;s imagination.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button   onClick={() => window.open('https://rzp.io/rzp/uOIscPfX', '_blank', 'noopener,noreferrer')} className="h-auto px-6 py-1 rounded-[32px] bg-black hover:bg-black/90 [font-family:'Nunito_Sans',Helvetica] font-semibold text-white text-sm leading-7">
              Pre-Order Now – ₹4999
            </Button>

            {/* <Button
              variant="outline"
              className="h-auto px-6 py-1 rounded-[32px] border-2 border-solid border-black bg-transparent hover:bg-black/5 [font-family:'Nunito_Sans',Helvetica] font-semibold text-black text-sm leading-7"
            >
              Explore Toys
            </Button> */}
          </div>
        </CardContent>
      </Card>

      <img
        className="absolute w-[131px] h-[196px] top-[244px] left-3 mt-4 object-cover"
        alt="AI toy robot"
        src="/Puppy_01 1.png"
      />

      <img
        className="absolute w-[140px] h-[196px] top-[244px] right-3 mt-4 object-cover"
        alt="AI toy companion"
        src="/penquin.png"
      />
    </div>
  );
};
