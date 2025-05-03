import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Frame = (): JSX.Element => {
  return (
    <div className="relative w-full  h-[460px] bg-[#ff6b01] mt-6">
      <Card className="border-none shadow-none bg-transparent">
        <CardContent className="flex flex-col items-center gap-3 absolute top-[60px] left-[18px] w-[340px] p-0">
          <div className="flex flex-col items-center gap-1 w-full">
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
            <Button className="h-auto px-6 py-1 rounded-[32px] bg-black hover:bg-black/90 [font-family:'Nunito_Sans',Helvetica] font-semibold text-white text-sm leading-7">
              Pre-Order Now
            </Button>

            <Button
              onClick={() => window.open('https://pages.razorpay.com/pl_QBiR5ZRuouU1ZH/view', '_blank', 'noopener,noreferrer')}
              className="justify-center px-7 py-3.5 bg-black rounded-[40px] h-auto"
            >
              <span className="font-['Baloo_2'] font-semibold text-[#ffffffee] text-2xl">Pre-Order Now!</span>
            </Button>

            <Button
              variant="outline"
              className="h-auto px-6 py-1 rounded-[32px] border-2 border-solid border-black bg-transparent hover:bg-black/5 [font-family:'Nunito_Sans',Helvetica] font-semibold text-black text-sm leading-7"
            >
              Explore Toys
            </Button>
          </div>
        </CardContent>
      </Card>

      <img
        className="absolute w-[131px] h-[196px] top-[244px] left-0 mt-4 object-cover"
        alt="AI toy robot"
        src="/chatgpt-image-apr-1--2025--04-26-38-pm-2.png"
      />

      <img
        className="absolute w-[131px] h-[196px] top-[244px] right-0 mt-4 object-cover"
        alt="AI toy companion"
        src="/chatgpt-image-apr-1--2025--04-17-42-pm-2.png"
      />
    </div>
  );
};
